import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bearImage from "./teletubbiebeer.png";
import lionImage from "./teletubbieleeuw.png";
import BGImage from "./teletubbieland.jpg";

const Resources = {
  Bear: new ImageSource(bearImage),
  Lion: new ImageSource(lionImage),
  BG: new ImageSource(BGImage),
};
const ResourceLoader = new Loader([Resources.Bear, Resources.Lion, Resources.BG]);

export { Resources, ResourceLoader};
