// src/api/otherAPI.js
import axiosInstance from "../axiosInstance";

// Function to fetch some other data
export const fetchNavItems = async () => {
  try {
    const test = await axiosInstance.get('/Navigation Items?fields=["*"]');
    // console.log(test);

    const navigationItems = test.data.data;

    // Helper function to find children of a parent navigation item
    const findChildren = (parentName) => {
      return navigationItems
        .filter((item) => item.parent_navigation_items === parentName)
        .sort((a,b) => a.position - b.position)
        .map((child) => ({
          subTitle: child.name,
          heading: child.heading,
          path: child.path,
        }));
    };

    // Process main navigation items
    const processedNavItems = navigationItems
      .filter((item) => item.is_group === 1) // Only include is_group = 1 items
      .sort((a, b) => a.position - b.position) // Sort by position
      .map((item) => {
        // Map to final structure
        const navItem = {
          title: item.name,
          path: item.path, // Fallback path generation
          heading: item.heading || item.name, // Fallback if heading is missing
          subNav: findChildren(item.name), // Find children for the subNav array
        };

        // If there are no subNav items, remove the subNav key
        if (navItem.subNav.length === 0) {
          delete navItem.subNav;
        }

        return navItem;
      });

      return processedNavItems;
  } catch (error) {
    console.error("Error fetching other data:", error);
    throw error;
  }
};
