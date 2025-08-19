import ImageGallery from "@/components/ImageGallery";


export default function Gallery() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 md:p-20">
      <h1 className="text-3xl font-bold underline">
      Gallery
    </h1>
    <ImageGallery />
    </div>
  );
}
