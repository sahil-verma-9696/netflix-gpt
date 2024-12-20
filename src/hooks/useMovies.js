import { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const useMovies = (input) => {
  const [movieNames, setMovieNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!input) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = "AIzaSyAyHvkh8ZJcPfgSqMBR27yDhrm9EvFtHyg";
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });

        const generationConfig = {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        };

        const chatSession = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [
                {
                  text: `Suggest a list of 15 movie names (one per line).,
                  without markdown plain text movie names.
                  region priority Indian then other
                  `,
                },
              ],
            },
          ],
        });

        const result = await chatSession.sendMessage(input);
        const responseText = result.response.text();

        // Parse movie names
        const movies = responseText
          .split("\n")
          .map((line) => line.replace(/^\*\s*/, "").trim()) // Clean up bullet points
          .filter((name) => name); // Remove empty lines

        setMovieNames(movies);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie names. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [input]);

  return { movieNames, loading, error };
};

export default useMovies;
