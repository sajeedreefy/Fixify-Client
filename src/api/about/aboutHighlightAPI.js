import React from "react";
import axiosInstance from "../axiosInstance";

async function fetchAboutHighlight() {
  try {
    const aboutHighlight = await axiosInstance.get(
      `Highlight Cards?fields=["*"]`
    );

    const highlightCards = aboutHighlight.data.data;
    highlightCards.sort((a, b) => a.position - b.position);
    return highlightCards;
  } catch (error) {
    console.error("Error fetching other data:", error);
    throw error;
  }
}

export default fetchAboutHighlight;
