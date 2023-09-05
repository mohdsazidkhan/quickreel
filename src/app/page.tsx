import { StoreProvider } from "@/store";
import { Editor } from "../components/Editor";
export default function Home() {
  return (
    <StoreProvider>
      <Editor></Editor>
    </StoreProvider>
  );
}
