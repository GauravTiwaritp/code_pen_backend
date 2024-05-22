import mongoose from "mongoose";

interface ICodeSchema {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
}

const codeSchema = new mongoose.Schema<ICodeSchema>({
  fullCode: {
    html: String,
    css: String,
    javascript: String,
  },
});

const code = mongoose.model("Code", codeSchema);
export { code };
