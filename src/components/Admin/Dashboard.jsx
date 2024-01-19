import Slider from 'react-slick';
import LoadingScrean from '../Loading/LoadingScrean';
import { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { appContext } from '../../Context/appContextProvider';
import { Helmet } from 'react-helmet';
export default function Dashboard({lang}) {
    const {getHomeSlider , getAllCategories , HomeSlider , AllCategories } = useContext(appContext);
    const settings = {
        dots: true,
        arrows:false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
    };

    const settings1 = {
        dots: false,
        arrows:false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
    };

    const [files, setfiles] = useState(null);
    const [file, setfile] = useState(null);

    // ============= slider =============
    const handleFileChange = (e) => {
        setfiles(e.target.files);
        console.log(e.target.files);

    };
    const handleUpload = async (id) => {;
        const formData = new FormData();
        if(files?.length){
            for (const file of files) {
                formData.append('slider', file);
            }
        }
        console.log(formData);
        try {
        $(`#button`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.patch(`https://aman-foods-backend.onrender.com/page/${id}`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#button`).html('Update Photos');
          getHomeSlider();
          $(`#sucMsg`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsg`).slideUp(300);
                setfiles(null);
                closeLayer();
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          setfiles(null);
          $(`#button`).html('Update Photos');
          $(`#errMsg`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsg`).slideUp(300);
            }, 1500);
          })
        }
    };
    const closeLayer = () => {
        $(`#editSlider`).hide(300);
    };

    const openLayer = () => {
        $(`#editSlider`).show(150 , function(){
            $(`#editSlider`).css('display' , 'flex');
        });
    }
    //=================== slider ==============

    //================== update category ==========
    const handleFileChangeCategory = (e) => {
        setfile(e.target.files[0]);
        console.log(e.target.files);

    };
    const handleUploadCategory = async (id) => {;
        const formData = new FormData();
        if(file){
            formData.append('image', file);
        }
        if($(`#categoryName${id}`).val()){
            formData.append('name' , $(`#categoryName${id}`).val())
        }
        console.log(formData);
        try {
        $(`#button${id}`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.put(`https://aman-foods-backend.onrender.com/category/${id}`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#button${id}`).html('Update Category');
          getAllCategories('en');
          $(`#sucMsgCat${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsgCat${id}`).slideUp(300);
                setfile(null);
                closeLayerCategory(id);
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          setfile(null);
          $(`#button${id}`).html('Update Category');
          $(`#errMsgCat${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsgCat${id}`).slideUp(300);
            }, 1500);
          })
        }
    };
 
    const closeLayerCategory = (id) => {
        $(`#categoryLayer${id}`).hide(300);
    }

    const openLayerCategory = (id) => {
        $(`#categoryLayer${id}`).show(150 , function(){
            $(`#categoryLayer${id}`).css('display' , 'flex');
        });
    }
    // ============== update category =============

    // ============== update product ==============
    const handleFileChangeProduct = (e) => {
        setfiles(e.target.files);
        console.log(files);
    };
    const handleUploadProduct = async (id , categoryId) => {
        const formData = new FormData();
        console.log(document.querySelector(`#imageInput${id}`));
        if(files?.length){
            for (const file of files) {
                formData.append('image', file);
            }
        }
        formData.append('productId' , id);
        formData.append('categoryId' , categoryId);
        if($(`#productName${id}`).val()){
            formData.append('name' , $(`#productName${id}`).val())
        }
        console.log(formData);
        try {
        $(`#probutton${id}`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.put(`https://aman-foods-backend.onrender.com/products`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#probutton${id}`).html('Update Product');
          getAllCategories('en');
          $(`#sucMsgPro${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsgPro${id}`).slideUp(300);
                setfiles(null);
                closeLayerProduct(id);
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          setfiles(null);
          $(`#probutton${id}`).html('Update Product');
          $(`#errMsgPro${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsgPro${id}`).slideUp(300);
            }, 1500);
          })
        }
    };
    const closeLayerProduct = (id) => {
        $(`#productLayer${id}`).hide(300);
    };
    const openLayerProduct = (id) => {
        $(`#productLayer${id}`).show(150 , function(){
            $(`#productLayer${id}`).css('display' , 'flex');
        });
    };
    // =============== update product ============

    // =============== add new category ==========
    const handleFileChangeNewCategory = (e) => {
        setfile(e.target.files[0]);
        console.log(e.target.files);

    };
    const handleUploadNewCategory = async () => {;
        const formData = new FormData();
        if(file){
            formData.append('image', file);
        }
        if($(`#newCategoryName`).val()){
            formData.append('name' , $(`#newCategoryName`).val())
        }
        console.log(formData);
        try {
        $(`#buttonNewCat`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.post(`https://aman-foods-backend.onrender.com/category`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#buttonNewCat`).html('Add Category');
          getAllCategories('en');
          $(`#sucMsgNewCat`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsgNewCat`).slideUp(300);
                setfile(null);
                closeLayerNewCategory();
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          setfile(null);
          $(`#buttonNewCat`).html('Add Category');
          $(`#errMsgNewCat`).html(error.response?.data.message);
          $(`#errMsgNewCat`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsgNewCat`).slideUp(300);
            }, 1500);
          })
        }
    };
 
    const closeLayerNewCategory = () => {
        $(`#newCategory`).hide(300);
    }

    const openLayerNewCategory = () => {
        $(`#newCategory`).show(150 , function(){
            $(`#newCategory`).css('display' , 'flex');
        });
    }
    // ============= add new category ==========

    // ============= add new product ============
    const handleFileChangeNewProduct = (e) => {
        setfiles(e.target.files);
        console.log(e.target.files);

    };
    const handleUploadNewProduct = async (id) => {
        const formData = new FormData();
        if(files?.length){
            for (const file of files) {
                formData.append('image', file);
            }
        }
        formData.append('categoryId' , id);
        if($(`#newProductName${id}`).val()){
            formData.append('name' , $(`#newProductName${id}`).val())
        }
        console.log(formData);
        try {
        $(`#buttonNewPro${id}`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.post(`https://aman-foods-backend.onrender.com/products`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#buttonNewPro${id}`).html('Add Product');
          getAllCategories('en');
          $(`#sucMsgNewPro${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsgNewPro${id}`).slideUp(300);
                setfiles(null);
                closeLayerNewProduct(id);
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          setfiles(null);
          $(`#buttonNewPro${id}`).html('Add Product');
          $(`#errMsgNewPro${id}`).html(error.response?.data.message);
          $(`#errMsgNewPro${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsgNewPro${id}`).slideUp(300);
            }, 1500);
          })
        }
    };
    const closeLayerNewProduct = (id) => {
        $(`#newProduct${id}`).hide(300);
    }

    const openLayerNewProduct = (id) => {
        $(`#newProduct${id}`).show(150 , function(){
            $(`#newProduct${id}`).css('display' , 'flex');
        });
    }
    // ============= add new product ============

    // ============ delete product ==============
    const deleteProduct = async (id) => {
        $(`#deleteProduct${id}`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
        try {
            const {data} = await axios.delete(`https://aman-foods-backend.onrender.com/products/${id}`);
            console.log(data);
            $(`#deleteProduct${id}`).html('delete product <i class="fa-solid fa-trash-can"></i>');
            getAllCategories('en');
        } catch (error) {
            $(`#deleteProduct${id}`).html('delete product <i class="fa-solid fa-trash-can"></i>');
            console.log(error);
        }
    }
    // =========== delete product ===============

    // ========== delete category =============
    const deleteCategory = async (id) => {
        $(`#deleteCategory${id}`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
        try {
            const {data} = await axios.delete(`https://aman-foods-backend.onrender.com/category/${id}`);
            console.log(data);
            $(`#deleteCategory${id}`).html('delete category <i class="fa-solid fa-trash-can"></i>');
            getAllCategories('en');
        } catch (error) {
            $(`#deleteCategory${id}`).html('delete category <i class="fa-solid fa-trash-can"></i>');
            console.log(error);
        }
    };
    // ========== delete category =============

    useEffect(() => {
        getAllCategories('en');
        getHomeSlider()
        console.log(AllCategories);

        return function(){
            localStorage.removeItem('adminToken');
        }
    },[]);
  return <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        {!HomeSlider || !AllCategories ?<LoadingScrean/>:<>
         <section id='homeSliderControl' className='p-5 my-5'>
            <div className="container shadow-lg rounded-3">
                <div><button type='button' onClick={openLayer} className='btn btn-dark w-100'>Edit Slider Photos Now  <i className="fa-regular fa-pen-to-square"></i></button></div>
                <Slider {...settings}>
                    {HomeSlider[0].images.map(image => <div key={image.public_id}><img src={image.secure_url} alt='slider_photo' className='w-100 rounded-3 ' loading='lazy' /></div>)}
                </Slider>
                <div style={{display:'none' , zIndex:'999999999'}} id={`editSlider`} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                    <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                        <div style={{display:'none'}} id={`sucMsg`} className="alert alert-success">success</div>
                        <div style={{display:'none'}} id={`errMsg`} className="alert alert-danger">invalid data</div>
                        <input type="file" multiple id={`imageInput`} className='form form-control mb-5' onChange={handleFileChange} />
                        <button type='button' id={`button`} onClick={()=>{handleUpload(HomeSlider[0]._id)}} className='btn btn-dark'>Update Photos</button>
                        <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayer()}} className='fa-solid fs-2 fa-xmark'></i></div>
                    </form>
                </div>
            </div>
        </section>
        <section id='allcategoriesAndProductsControl' className='p-5 my-5'>
            <div className="container-fluid">
                <h1 className='fw-bolder text-center mb-3'>Categories Control</h1>
                <div className='text-center mb-5'><button type='button' className='btn btn-dark' onClick={openLayerNewCategory}>Add New Category <i className="fa-solid fa-circle-plus"></i></button></div>
                <div style={{display:'none' , zIndex:'999999999'}} id={`newCategory`} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                    <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                        <div style={{display:'none'}} id={`sucMsgNewCat`} className="alert alert-success">success</div>
                        <div style={{display:'none'}} id={`errMsgNewCat`} className="alert alert-danger">invalid data</div>
                        <input type="text" id={`newCategoryName`} className='form form-control mb-4' placeholder='Category Name' />
                        <input type="file" id={`imageInputNewCat`} className='form form-control mb-5' onChange={handleFileChangeNewCategory} />
                        <button type='button' id={`buttonNewCat`} onClick={handleUploadNewCategory} className='btn btn-dark'>Add Category</button>
                        <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayerNewCategory()}} className='fa-solid fs-2 fa-xmark'></i></div>
                    </form>
                </div>
                {AllCategories.ctegories.map(category => <div key={category._id} className='row justify-content-center gy-4 align-items-center mb-5'>
                <h2 className='w-100 text-center fs-1 fw-bolder text-black mb-5'>{category.name} Control</h2>
                    <div className='col-12 d-flex justify-content-center align-items-center shadow-lg rounded-3'>
                        <figure className='w-50 mb-0'>
                            <img src={category.image.secure_url} alt={category.name} className='w-100 rounded-3' loading='lazy'/>
                            <figcaption className='p-2 text-center'>
                                <h2 className='controlTitles mb-2'>{category.name}</h2>
                                <div className='text-center mb-3'><button onClick={()=> {openLayerCategory(category._id)}} className='btn btn-dark me-3'>Edit Now <i className="fa-regular fa-pen-to-square"></i></button> <button type='button' onClick={() => {openLayerNewProduct(category._id)}} className='btn btn-outline-dark me-3'>Add Product In This Category <i className="fa-solid fa-circle-plus"></i></button> <button id={`deleteCategory${category._id}`} onClick={() => {deleteCategory(category._id)}} className='btn btn-danger'>delete category <i className="fa-solid fa-trash-can"></i></button></div>
                                <div style={{display:'none' , zIndex:'999999999'}} id={`newProduct${category._id}`} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                                    <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                                        <div style={{display:'none'}} id={`sucMsgNewPro${category._id}`} className="alert alert-success">success</div>
                                        <div style={{display:'none'}} id={`errMsgNewPro${category._id}`} className="alert alert-danger">invalid data</div>
                                        <input type="text" id={`newProductName${category._id}`} className='form form-control mb-4' placeholder='Product Name' />
                                        <input type="file" multiple id={`imageInputNewPro${category._id}`} className='form form-control mb-5' onChange={handleFileChangeNewProduct} />
                                        <button type='button' id={`buttonNewPro${category._id}`} onClick={()=>{handleUploadNewProduct(category._id)}} className='btn btn-dark'>Add Product</button>
                                        <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayerNewProduct(category._id)}} className='fa-solid fs-2 fa-xmark'></i></div>
                                    </form>
                                </div>
                            </figcaption>  
                        </figure>                         
                    </div>
                    <div style={{display:'none' , zIndex:'999999999'}} id={`categoryLayer${category._id}`} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                        <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                            <div style={{display:'none'}} id={`sucMsgCat${category._id}`} className="alert alert-success">success</div>
                            <div style={{display:'none'}} id={`errMsgCat${category._id}`} className="alert alert-danger">invalid data</div>
                            <input type="text" id={`categoryName${category._id}`} defaultValue={category.name} className='form form-control mb-4' placeholder='Category Name' />
                            <input type="file" id={`imageInput${category._id}`} className='form form-control mb-5' onChange={handleFileChangeCategory} />
                            <button type='button' id={`button${category._id}`} onClick={()=>{handleUploadCategory(category._id)}} className='btn btn-dark'>Update Category</button>
                            <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayerCategory(category._id)}} className='fa-solid fs-2 fa-xmark'></i></div>
                        </form>
                    </div>
                <h2 className='text-center w-100 my-5 text-black fs-1 fw-bolder'>{category.name}'s Products Control</h2>
                {category.Products.map(product => <div key={product._id} className='col-lg-3 col-md-4 col-6'>
                    <figure className='p-1 shadow-lg rounded-3'>
                        <Slider {...settings1}>
                            {product.images.map(image => <div key={image.public_id}><img src={image.secure_url} alt={product.name} className='w-100 rounded-3 ' loading='lazy' /></div>)}
                        </Slider>

                        <figcaption className='p-1'>
                            <h3 className='text-center controlTitles text-success mb-2'>{product.name}</h3>
                            <div className='text-center'><button onClick={()=> {openLayerProduct(product._id)}} className='btn btn-dark me-3'>Edit Now <i className="fa-regular fa-pen-to-square"></i></button> <button id={`deleteProduct${product._id}`} onClick={() => {deleteProduct(product._id)}} className='btn btn-danger'>delte product <i className="fa-solid fa-trash-can"></i></button></div>
                        </figcaption>
                    </figure>
                    <div style={{display:'none' , zIndex:'999999999'}} id={`productLayer${product._id}`} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                        <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                            <div style={{display:'none'}} id={`sucMsgPro${product._id}`} className="alert alert-success">success</div>
                            <div style={{display:'none'}} id={`errMsgPro${product._id}`} className="alert alert-danger">invalid data</div>
                            <input type="text" id={`productName${product._id}`} defaultValue={product.name} className='form form-control mb-4' placeholder='product Name' />
                            <input type="file" multiple id={`imageInput${product._id}`} className='form form-control mb-5' onChange={handleFileChangeProduct} />
                            <button type='button' id={`probutton${product._id}`} onClick={()=>{handleUploadProduct(product._id , category._id)}} className='btn btn-dark'>Update Product</button>
                            <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayerProduct(product._id)}} className='fa-solid fs-2 fa-xmark'></i></div>
                        </form>
                    </div>

                </div>)}
                <hr />
                </div>)}
            </div>
        </section>
        </>}
  </>
}
