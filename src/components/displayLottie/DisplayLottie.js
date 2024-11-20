import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  updateAnimationColors(animationData, isDarkMode) {
    const updatedData = JSON.parse(JSON.stringify(animationData)); // Deep copy the animation data

    updatedData.layers.forEach(layer => {
      if (layer.shapes) {
        layer.shapes.forEach(shape => {
          if (shape.it) {
            shape.it.forEach(item => {
              if (item.ty === "fl" && item.c && item.c.darkMode) {
                item.c.k = isDarkMode ? [0, 0, 0, 1] : [1, 0, 0, 1]; // Change color based on dark mode
              }
            });
          }
        });
      }
    });

    return updatedData;
  }

  render() {
    const { animationData, isDarkMode } = this.props;
    const updatedAnimationData = this.updateAnimationColors(animationData, isDarkMode);

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: updatedAnimationData,
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}