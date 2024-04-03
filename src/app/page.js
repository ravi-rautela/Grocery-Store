import Image from "next/image";
import CategoryList from "./_component/CategoryList";
import ProductList from "./_component/ProductList";
import Slider from "./_component/Slider";
import GlobleApi from "./_utils/GlobleApi";
import Footer from "./_component/Footer";

export default async function Home() {
  const sliderList = await GlobleApi.getSliders();
  const categoryList = await GlobleApi.getCategoryList();
  const productList = await GlobleApi.getAllProducts();


  return (
    <div className="px-14 p-9 md:p-12 ">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductList productList={productList} />
      {/* Banner Image */}
      <div className="my-2 md:my-3 w-full md:w-[1170px] md:h-[400px] bg-[#a4c288] rounded-lg">
        <Image src="/banner.jpg" width={1000} height={400} alt="banner" className="w-full h-[400px] object-contain " />
      </div>
      {/* Foooter */}
      <Footer />
    </div>


  );
}
