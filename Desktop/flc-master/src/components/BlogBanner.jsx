import React from "react";

const BlogBanner = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div class="grid grid-rows-6 grid-cols-3  grid-flow-col gap-4">
          <div class="row-start-1 row-end-3 col-start-1 col-end-3   h-36 bg-pink-300">
            01
          </div>
          {[0, 1, 2].map((item, index) => (
            <div
              key={index}
              className={`row-start-${index + 1} bg-pink-400 col-start-3`}
            >
              02
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;