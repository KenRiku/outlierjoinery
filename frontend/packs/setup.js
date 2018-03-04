// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import Hero from "components/hero";
import Vision from "components/vision/vision";
import About from "components/about/about";
import ImageModal from "components/imageModal/imageModal";
import WebpackerReact from "webpacker-react";

WebpackerReact.setup({ Hero, Vision, About, ImageModal });
