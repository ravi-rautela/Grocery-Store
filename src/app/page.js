import CategoryList from "./_component/CategoryList";
import Slider from "./_component/Slider";
import GlobleApi from "./_utils/GlobleApi";

export default async function Home() {
  const sliderList = await GlobleApi.getSliders();
  const categoryList = await GlobleApi.getCategoryList();
  return (
    <div className="px-14 p-9 md:p-12 ">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
    </div>


  );
}
