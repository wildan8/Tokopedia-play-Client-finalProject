import LeftProd from "./left_product";
import MainVideo from "./main_video";
import Comment from "../comment/index";

const Index = () => {
  return (
    <>
      <body className=" relative bg-darkTokPed h-screen text-white py-10">
        
        {/* sidebar start */}
        <div className=" fixed border border-grey overflow-y-auto h-3/4 rounded-md left-4 w-72 mt-14">
          <h1 className="font-semibold z-40 bg-grey sticky top-0 text-xl text-center p-1">
            Product List
          </h1>
          <div className="bg-darkTokPed  px-5 ">
            <div className=" mt-8 grid grid-cols-1 gap-2">
              <LeftProd />
            </div>
          </div>
        </div>
        {/* sidebar end */}

        <div className="ml-80 w-1/2 ">
          <MainVideo />
        </div>
        <div className=" bg-white text-darkTokPed fixed rounded ml-auto top-9 right-3 h-3/4 bottom-auto w-1/4 mt-14">
          <Comment />
        </div>
      </body>
    </>
  );
};

export default Index;
