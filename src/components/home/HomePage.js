import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>The Record library</h1>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et,
        porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum
        id enim. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
        aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
        magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
        aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia
        eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia
        eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan
        id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada
        feugiat. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem
        ut libero malesuada feugiat. Proin eget tortor risus. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nulla porttitor accumsan
        tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis
        at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac
        lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
        lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut
        libero malesuada feugiat. Donec sollicitudin molestie malesuada. Donec
        rutrum congue leo eget malesuada. Donec rutrum congue leo eget
        malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac
        diam sit amet quam vehicula elementum sed sit amet dui. Donec
        sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget
        consectetur sed, convallis at tellus. Pellentesque in ipsum id orci
        porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed
        sit amet dui. Sed porttitor lectus nibh. Cras ultricies ligula sed magna
        dictum porta. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam
        id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum
        porta. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
        arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Donec
        sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere
        blandit. Curabitur aliquet quam id dui posuere blandit. Donec
        sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed
        porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget
        consectetur sed, convallis at tellus. Donec sollicitudin molestie
        malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac
        lectus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
        nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit
        amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan
        id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras ultricies ligula sed magna dictum
        porta. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
        tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus
        convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor
        volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus
        nibh. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta
        dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas
        non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec
        rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia
        in, elementum id enim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id
        enim. Proin eget tortor risus. Proin eget tortor risus. Pellentesque in
        ipsum id orci porta dapibus. Proin eget tortor risus.
      </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
