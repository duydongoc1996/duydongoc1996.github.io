import React from "react";
import image1 from "../assets/images/7U8A9922.jpg";
import image2 from "../assets/images/bong.png";
import image3 from "../assets/images/mun2.png";

export default function Intro() {
  return (
    <section id="intro" className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mx-auto lg:w-4/6">
          <div class="mb-20 flex w-full flex-col text-center">
            <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-red-500">
              Chuyện là thế này ...
            </h2>
            <h1 class="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
              Ngày xửa ngày xưa
            </h1>
          </div>
          <div className="h-100 overflow-hidden rounded-lg">
            <img
              alt="content"
              className="h-full w-full object-cover object-center"
              src={image1}
            />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-gray-400">
                <img className="h-32 w-32" src={image3}></img>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  Dạ Quyên
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-red-500"></div>
                <p className="text-justify text-base">
                  Sau bao tháng năm thanh xuân nắm tay cùng nhau bước trên hành
                  trình tình yêu nhiều màu sắc chúng mình quyết định sẽ về chung
                  một nhà.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-justify text-lg leading-relaxed">
                Ngày trước khi xem Vlog đám cưới của người ta mình luôn hạnh
                phúc và xúc động đến rớt nước mắt rồi tự hỏi khi nào định mệnh
                của mình sẽ xuất hiện. Và nhiều năm sau đó khi mình đã quen với
                cô đơn thì đột nhiên bạn bước vào cuộc sống của mình. Bạn có
                phải Mr Right của mình không? mình không biết! nhưng mình biết
                bạn ngoài là bạn đồng tuổi, bạn đồng hương, bạn trai, bạn thân
                sắp tới sẽ là bạn đồng hành cùng mình trên hành trình tương lai.
                Mọi người thường nói khi yêu đúng người thì sẽ hoá trẻ con, bạn
                là người mà khiến mình không còn phải một mình cố gắng mạnh mẽ
                trước cuộc sống bộn bề này. Cảm ơn anh người bạn đời của em.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-r sm:border-t-0 sm:py-8 sm:pr-8 sm:text-left">
              <p className="mb-4 text-justify text-lg leading-relaxed">
                "Tình yêu thường bắt đầu từ những điều đơn giản nhất" - "Không
                bao giờ là quá muộn để thay đổi chính bản thân mình, bước ra từ
                quá khứ, vượt qua những khó khăn hiện tại, thách thức và chinh
                phục tương lai". Em đến bên anh và mang theo phép màu, khiến anh
                nhìn thấy cuộc sống này theo tích cực hơn. Giúp anh tìm lại bản
                thân mình sau khoảng thời gian lạc lõng giữa cuộc đời. Em là
                người mà anh muốn dành cả cuộc đời này để yêu thương và chia sẻ
                mọi đắng cay ngọt bùi. Cảm ơn em vì tất cả cũng với mọi điều tốt
                đẹp nhất trên đời.
              </p>
            </div>
            <div className="text-center sm:w-1/3 sm:py-8 sm:pl-8">
              <div className="inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-gray-400">
                <img className="h-32 w-32" src={image2}></img>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  Ngọc Duy
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-red-500"></div>
                <p className="text-justify text-base">
                  Và giờ là lúc chúng ta cùng nhau xây dựng một mái ấm hạnh
                  phúc. Hãy trân trọng và giữ gìn tình yêu của chúng ta mãi mãi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
