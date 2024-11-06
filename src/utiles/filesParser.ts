// interface ExtType

export const IMAGE = "IMAGE";
export const MEDIA = "MEDIA";
export const FILE = "FILE";

export const Image = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".webp",
  ".tiff",
  ".ico",
  ".heic",
  ".svg",
  ".ai",
  ".eps",
  ".raw",
  ".cr2",
  ".nef",
  ".psd",
  ".xcf",
];

export const Media = [
  ".mp4",
  ".avi",
  ".mov",
  ".wmv",
  ".flv",
  ".mkv",
  ".webm",
  ".m4v",
  ".mpeg",
  ".mpg",
  ".3gp",
  ".3g2",
  ".h264",
  ".m2ts",
  ".prproj",
  ".fcpx",
  ".dav",
  ".mxf",
  ".vob",
  ".mp3",
  ".wav",
  ".ogg",
  ".m4a",
  ".wma",
  ".aac",
  ".flac",
  ".alac",
  ".aiff",
  ".ac3",
  ".mid",
  ".midi",
];

export const FileFilter = (ext: string) => {
  if (Image.includes(ext)) {
    return IMAGE;
  } else if (Media.includes(ext)) {
    return MEDIA;
  } else {
    return FILE;
  }
};

export const getExtension = (fileName: string): string => {
  const lastDotIndex = fileName?.lastIndexOf(".");
  if (lastDotIndex === -1) return "";
  return fileName?.slice(lastDotIndex).toLowerCase();
};
