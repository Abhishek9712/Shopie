// // import React, { useState } from "react";
// // import "./AddProduct.css";
// // import upload_area from "../Assets/upload_area.svg";

// // const AddProduct = () => {

// //   const[image,setImage] = useState(false);
// //   const [productDetails,setProductDetails] = useState({
// //       name:"",
// //       image:"",
// //       category:"women",
// //       new_price:"",
// //       old_price:""
// //   });

// //   const AddProduct = async () => {

// //     let dataObj;
// //     let product = productDetails;

// //     let formData = new FormData();
// //     formData.append('product', image);

// //     await fetch('http://localhost:4000/upload', {
// //       method: 'POST',
// //       headers: {
// //         Accept:'application/json',
// //       },
// //       body: formData,
// //     })
// //       .then((resp) => resp.json())
// //       .then((data) => {dataObj=data});

// //     if (dataObj.success) {
// //       product.image = dataObj.image_url;
// //       console.log(product);
// //       await fetch('http://localhost:4000/addproduct', {
// //       method: 'POST',
// //       headers: {
// //         Accept:'application/json',
// //         'Content-Type':'application/json',
// //       },
// //       body: JSON.stringify(product),
// //     })
// //       .then((resp) => resp.json())
// //       .then((data) => {data.success?alert("Product Added"):alert("Failed")});

// //     }
// //   }

// //   const changeHandler = (e) => {
// //     console.log(e);
// //     setProductDetails({...productDetails,[e.target.name]:e.target.value});
// //     }

// //   const imageHandler = (e) => {
// //     setImage(e.target.files[0]);
// //     }

// //   return (
// //     <div className="addproduct">
// //       <div className="addproduct-itemfield">
// //         <p>Product title</p>
// //         <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
// //       </div>
// //       <div className="addproduct-price">
// //         <div className="addproduct-itemfield">
// //           <p>Price</p>
// //           <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
// //         </div>
// //         <div className="addproduct-itemfield">
// //           <p>Offer Price</p>
// //           <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
// //         </div>
// //       </div>
// //       <div className="addproduct-itemfield">
// //         <p>Product category</p>
// //         <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
// //           <option value="women">Women</option>
// //           <option value="men">Men</option>
// //           <option value="kid">Kid</option>
// //         </select>
// //       </div>
// //       <div className="addproduct-itemfield">
// //         <p>Product title</p>
// //         <label for="file-input">
// //           <img className="addproduct-thumbnail-img" src={!image?upload_area:URL.createObjectURL(image)} alt="" />
// //         </label>
// //         <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="file-input" hidden />
// //       </div>
// //       <button className="addproduct-btn" onClick={()=>{AddProduct()}}>ADD</button>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// import React, { useState } from "react";
// import "./AddProduct.css";
// import upload_area from "../Assets/upload_area.svg";

// const AddProduct = () => {
//   const [image, setImage] = useState(null); // State to store the image file
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     image: "",
//     category: "women",
//     new_price: "",
//     old_price: "",
//   });

//   const AddProduct = async () => {
//     if (!image) {
//       alert("Please select an image");
//       return;
//     }

//     let formData = new FormData();
//     formData.append("product", image);

//     // Upload image to server
//     const imageResponse = await fetch("http://localhost:4000/upload", {
//       method: "POST",
//       body: formData,
//     });
//     const imageData = await imageResponse.json();

//     if (imageData.success) {
//       // If image upload successful, update product details with image URL
//       const updatedProductDetails = {
//         ...productDetails,
//         image: imageData.image_url,
//       };

//       // Send product details to server for adding product
//       const productResponse = await fetch("http://localhost:4000/addproduct", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedProductDetails),
//       });

//       const productData = await productResponse.json();
//       if (productData.success) {
//         alert("Product Added");
//       } else {
//         alert("Failed to add product");
//       }
//     } else {
//       alert("Failed to upload image");
//     }
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]); // Update image state with selected file
//   };

//   return (
//     <div className="addproduct">
//       <div className="addproduct-itemfield">
//         <p>Product title</p>
//         <input
//           type="text"
//           name="name"
//           value={productDetails.name}
//           onChange={(e) => {
//             changeHandler(e);
//           }}
//           placeholder="Type here"
//         />
//       </div>
//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//           <p>Price</p>
//           <input
//             type="text"
//             name="old_price"
//             value={productDetails.old_price}
//             onChange={(e) => {
//               changeHandler(e);
//             }}
//             placeholder="Type here"
//           />
//         </div>
//         <div className="addproduct-itemfield">
//           <p>Offer Price</p>
//           <input
//             type="text"
//             name="new_price"
//             value={productDetails.new_price}
//             onChange={(e) => {
//               changeHandler(e);
//             }}
//             placeholder="Type here"
//           />
//         </div>
//       </div>
//       <div className="addproduct-itemfield">
//         <p>Product category</p>
//         <select
//           value={productDetails.category}
//           name="category"
//           className="add-product-selector"
//           onChange={changeHandler}
//         >
//           <option value="women">Women</option>
//           <option value="men">Men</option>
//           <option value="kid">Kid</option>
//         </select>
//       </div>
//       <div className="addproduct-itemfield">
//         <p>Product image</p>
//         <label htmlFor="file-input">
//           <img
//             className="addproduct-thumbnail-img"
//             src={!image ? upload_area : URL.createObjectURL(image)}
//             alt=""
//           />
//         </label>
//         <input
//           onChange={(e) => {
//             imageHandler(e);
//           }}
//           type="file"
//           name="image"
//           id="file-input"
//           hidden
//         />
//       </div>
//       <button className="addproduct-btn" onClick={AddProduct}>
//         ADD
//       </button>
//     </div>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const addProduct = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("product", image);

    try {
      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image.");
      }

      const imageData = await uploadResponse.json();
      if (!imageData.success) {
        throw new Error("Image upload failed.");
      }

      const productData = {
        ...productDetails,
        image: imageData.image_url,
      };

      const addProductResponse = await fetch(
        "http://localhost:4000/addproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      if (!addProductResponse.ok) {
        throw new Error("Failed to add product.");
      }

      alert("Product added successfully.");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product.");
    }
  };

  const handleInputChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={handleInputChange}
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            value={productDetails.old_price}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select
          value={productDetails.category}
          name="category"
          className="add-product-selector"
          onChange={handleInputChange}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Product image</p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt=""
          />
        </label>
        <input
          onChange={handleImageChange}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button className="addproduct-btn" onClick={addProduct}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
