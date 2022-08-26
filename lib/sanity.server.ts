import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skdN1Xe2qM33vUIq4BTjlQQx87NYHLysEPwhteKyxBY77nO9fWRRrnUgYAffiLRTJymR4dE5X82oN8lLco8vylWFEVdmihxkQW9xH0K0JW38JIbVn2pLubBubFA5O3NjzG8o68iNw5H2PPQtIcOIQV9r8sQlZ7FvGPqN3jfTmG4V8Ppoa8AX",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
