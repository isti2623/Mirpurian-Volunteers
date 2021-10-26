import React from 'react';
import blogOne from '../../images/blog-one.jpg'
import blogTwo from '../../images/blog-two.jpg'
import blogThree from '../../images/blog-three.jpg'

const Blog = () => {
    return (
        <div className='container my-3'>
            <h2 className='fw-bold text-center about-part text-warning'>BLOG</h2>
            <h1 className='custom-h1 text-center mt-5 mb-2'>Our Latest News

            </h1>
            <p className='text-secondary text-center mb-5'>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.
            </p>

            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={blogOne} className="img-fluid w-100 rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title card-text">Best and less published their supplier lists.</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={blogThree} className="img-fluid w-100 rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title card-text">Best and less published their supplier lists.</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={blogTwo} className="img-fluid w-100 rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title card-text">Best and less published their supplier lists.</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;