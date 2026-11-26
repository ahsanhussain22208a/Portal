
import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import axios from 'axios'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrimeResponse = () => {

  // All Posts State
  const [posts, setPosts] = useState([]);

  // Form States
  const [ptitle, setPtitle] = useState('');
  const [pdesc, setPdesc] = useState('');
  const [pregion, setPregion] = useState('');
  const [pcategory, setPcategory] = useState('');
  const [pimage, setPimage] = useState(null);

  // Comment States
  const [postId, setPostId] = useState('');
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);

  // Get All Posts API
  const getAllPosts = async () => {

    const res = await axios.get(
      'http://localhost:4000/api/posts/get_All_posts'
    );

    setPosts(res.data.postUser);

  };

  // Page Load API Call
  useEffect(() => {
    getAllPosts();
  }, []);

  // Add Post API
  const addPostHandler = async () => {

    const Token = localStorage.getItem('Token');

    // Validation
    if (!ptitle || !pdesc || !pregion || !pcategory || !pimage) {
      toast.error("Please Fill All Fields and Upload Image");
      return;
    }

    // FormData for Image Upload
    const formData = new FormData();

    formData.append('title', ptitle);
    formData.append('description', pdesc);
    formData.append('region', pregion);
    formData.append('category', pcategory);
    formData.append('image', pimage);

    // API Calling
    const res = await axios.post(
      'http://localhost:4000/api/posts/Add_Post',
      formData,
      {
        headers: {
          'auth-token': Token
        }
      }
    );

    toast.success("Complaint Added Successfully");

    // Clear Form
    setPtitle('');
    setPdesc('');
    setPregion('');
    setPcategory('');
    setPimage(null);

    // Refresh Posts
    getAllPosts();

  };

  // Add Like API
  const addLikeHandler = async (id) => {

    const Token = localStorage.getItem('Token');

    const res = await axios.put(
      `http://localhost:4000/api/posts/Add_Like/${id}`,
      {},
      {
        headers: {
          'auth-token': Token
        }
      }
    );

    toast.success("Post Liked");

    getAllPosts();

  };

  // Add Dislike API
  const addDisLikeHandler = async (id) => {

    const Token = localStorage.getItem('Token');

    const res = await axios.put(
      `http://localhost:4000/api/posts/Add_disLike/${id}`,
      {},
      {
        headers: {
          'auth-token': Token
        }
      }
    );

    toast.success("Post Disliked");

    getAllPosts();

  };

  // Get All Comments API
  const FetchAllComments = async (id) => {

    const Token = localStorage.getItem('Token');

    const result = await axios.get(
      `http://localhost:4000/api/post/comment/get_all_comment_post/${id}`,
      {
        headers: {
          'auth-token': Token
        }
      }
    );

    setComments(result.data);

  };

  // Open Comment Modal
  const commentModalHandler = (id) => {

    setPostId(id);
    setShowCommentModal(true);
    FetchAllComments(id);

  };

  // Close Comment Modal
  const closeCommentModal = () => {

    setShowCommentModal(false);
    setCommentText('');
    setComments([]);

  };

  // Add Comment API
  const addComment = async (id) => {

    const Token = localStorage.getItem('Token');

    // Validation
    if (!commentText.trim()) {
      toast.error("Please Write a Comment");
      return;
    }

    const res = await axios.post(
      `http://localhost:4000/api/post/comment/add_comment/${id}`,
      {
        description: commentText
      },
      {
        headers: {
          'auth-token': Token
        }
      }
    );

    toast.success("Comment Added Successfully");

    // Clear Comment Input
    setCommentText('');

    // Refresh Comments
    FetchAllComments(id);
    
getAllPosts();

  };


  return (

    <Layout>

      <ToastContainer />

      {/* Header */}
      <div className="crime-respnse-top bg-[#03302D]">
        <h1 className='py-20 text-3xl font-semibold text-center text-white md:text-5xl'>
          Crime Responses
        </h1>
      </div>

      {/* Top Section */}
      <div className="crime-response-mid md:w-[90vw] mx-auto flex md:flex-row flex-col items-center my-10">

        <div className="left w-[90%] md:w-[70%]">

          <div className="top">

            <div className="flex flex-col cards md:flex-row justify-evenly">

              {/* Total Posts */}
              <div className="card mb-5 md:mb-0 cursor-pointer flex flex-col items-center md:w-[26%] rounded-2xl md:h-[25vh] h-[18vh] bg-[#309689]">

                <h1 className='py-5 text-xl font-bold'>
                  Total Posts
                </h1>

                <p className='pt-5 text-lg font-bold'>
                  {posts.length}
                </p>

              </div>

              {/* Complaint Box */}
              <div className="card mb-5 md:mb-0 cursor-pointer flex flex-col items-center md:w-[26%] rounded-2xl md:h-[25vh] h-[18vh] bg-[#309689]">

                <h1 className='py-5 text-xl font-bold'>
                  COMPLAINT BOX
                </h1>

                <p className='pt-5 text-lg font-bold'>
                  {posts.length}
                </p>

              </div>

            </div>

          </div>

          <div className="mt-10 btm">

            <div className="btm-btm flex justify-evenly bg-[#309689] rounded-lg py-2 md:w-[90%] mb-5 md:mb-0 mx-auto">

              <div className="btn w-[48%] text-center cursor-pointer font-semibold text-white py-2 rounded-lg bg-[#175149]">
                Complaints
              </div>

              <div className="btn w-[48%] cursor-pointer text-center font-semibold text-white py-2">
                People Responses
              </div>

            </div>

          </div>

        </div>

        {/* Location */}
        <div className="right bg-[#EBF5F4] w-[90%] md:w-[30%] rounded-lg">

          <div className='flex items-center px-4 py-3 space-x-4 top'>

            <div className="icon">
              <CiLocationOn className='text-[#309689] text-2xl' />
            </div>

            <div className="desc">
              <p className='font-bold'>Location</p>
              <p className='font-light'>Karachi, Pakistan</p>
            </div>

          </div>

          <div className='btm'>

            <iframe
              className='mx-auto my-4 rounded-xl'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9024867479634!2d67.02166607442994!3d24.867179844990453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6b1566c46f%3A0x65318f4eb62c7aa8!2sAptech%20Computer%20Education%20Garden%20Center!5e0!3m2!1sen!2s!4v1728276334584!5m2!1sen!2s"
              width="90%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            />

          </div>

        </div>

      </div>


      {/* Posts And Add Complaint */}
      <div className="crime-response-mid md:w-[90vw] mx-auto flex md:flex-row flex-col my-10">

        {/* All Posts */}
        <div className="left w-[100%] px-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:w-[70%]">

          {posts.map((data, index) => (

            <div key={data._id} className="py-5 shadow-2xl card rounded-xl">

              {/* Complaint Image */}
              {data.image && (
                <img
                  src={`http://localhost:4000/uploads/${data.image}`}
                  alt="Crime Complaint"
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              )}

              <div className='px-5 pt-5'>

                <h1 className='text-lg font-bold'>
                  {data.title}
                </h1>

                <p className='text-sm font-light'>
                  {data.description}
                </p>

              </div>

              <div className='px-5 pt-2'>

                <p>
                  Region: {data.region}
                </p>

                <p>
                  Category: {data.category}
                </p>

              </div>

              <div className="flex justify-between px-5 py-4 options">

                {/* Like */}
                <div className="flex items-center gap-1 cursor-pointer like">

                  <AiOutlineLike
                    onClick={() => addLikeHandler(data._id)}
                    className='text-xl'
                  />

                  <p>
                    {data.likes.length}
                  </p>

                </div>

                {/* Comment */}
                <div className="flex items-center gap-1 cursor-pointer comment">

                  <FaRegComment
                    onClick={() => commentModalHandler(data._id)}
                    className='text-xl'
                  />

                  <p>
                    {data.comments ? data.comments.length : 0}
                  </p>

                </div>

                {/* Dislike */}
                <div className="flex items-center gap-1 cursor-pointer dislike">

                  <AiOutlineDislike
                    onClick={() => addDisLikeHandler(data._id)}
                    className='text-xl'
                  />

                  <p>
                    {data.dislikes.length}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Add Complaint Form */}
        <div className="right mt-5 md:mt-0 bg-[#EBF5F4] w-[90%] mx-auto h-[100%] md:w-[30%] rounded-lg">

          <h1 className='px-5 py-5 text-xl font-bold'>
            Send Response
          </h1>

          {/* Title */}
          <div className="inp w-[90%] mx-auto">

            <input
              value={ptitle}
              onChange={(e) => setPtitle(e.target.value)}
              className='outline-none w-[100%] rounded-lg py-1 px-4'
              type="text"
              placeholder='Complaint Title'
            />

          </div>

          {/* Description */}
          <div className="inp w-[90%] mx-auto mt-2">

            <textarea
              value={pdesc}
              onChange={(e) => setPdesc(e.target.value)}
              className='outline-none w-[100%] rounded-lg py-1 px-4'
              rows="6"
              placeholder='Description'
            />

          </div>

          {/* Image Upload */}
          <div className="inp w-[90%] mx-auto my-2">

            <label className="font-semibold">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPimage(e.target.files[0])}
              className="w-full bg-white rounded-lg p-2"
            />

          </div>

          {/* Region */}
          <div className="inp w-[90%] mx-auto my-1">

            <label>Region</label>

            <select
              value={pregion}
              onChange={(e) => setPregion(e.target.value)}
              className='outline-none w-[100%] rounded-lg py-1 px-4'
            >

              <option value="">Region</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>

            </select>

          </div>

          {/* Category */}
          <div className="inp w-[90%] mx-auto my-1">

            <label>Category</label>

            <select
              value={pcategory}
              onChange={(e) => setPcategory(e.target.value)}
              className='outline-none w-[100%] rounded-lg py-1 px-4'
            >

              <option value="">Category</option>
              <option value="Target Killing">Target Killing</option>
              <option value="Murder">Murder</option>
              <option value="Robbery">Robbery</option>
              <option value="Bomb Blast">Bomb Blast</option>
              <option value="Snatching">Snatching</option>

            </select>

          </div>

          {/* Submit */}
          <div className="inp w-[90%] mx-auto my-4">

            <button
              onClick={addPostHandler}
              className='bg-[#309689] text-white font-bold px-5 py-1 rounded-lg'
            >
              Add Complaint
            </button>

          </div>

        </div>

      </div>


      {/* Comment Modal */}
      {showCommentModal && (

        <div className="bg-black/40 fixed inset-0 z-50 flex items-center justify-center">

          <div className="bg-white shadow-2xl rounded-2xl h-[80vh] md:h-[70vh] w-[90vw] md:w-[50vw]">

            {/* Modal Header */}
            <div className="flex items-center px-5 justify-between h-[15%]">

              <h1 className='text-xl font-medium'>
                All Comments
              </h1>

              <ImCross
                onClick={closeCommentModal}
                className='text-xl cursor-pointer'
              />

            </div>

            {/* All Comments */}
            <div className="h-[60%] overflow-y-auto">

              {comments.length > 0 ? (

                comments.map((data, index) => (

                  <div key={data._id || index} className='flex gap-3 px-5 my-3'>

                    <div>

                      <p className='text-sm font-bold'>
                        {data.user ? data.user.username : 'User'}
                      </p>

                      <p className='text-sm'>
                        {data.description}
                      </p>

                    </div>

                  </div>

                ))

              ) : (

                <p className="text-center text-gray-500 py-10">
                  No Comments Yet
                </p>

              )}

            </div>

            {/* Add Comment */}
            <div className="h-[25%] px-5 flex items-center justify-between gap-3">

              <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                type="text"
                placeholder='Add Comment'
                className='outline-none bg-gray-100 px-4 py-2 w-full rounded-lg'
              />

              <button
                onClick={() => addComment(postId)}
                className='bg-[#309689] text-white px-4 py-2 rounded-lg font-medium'
              >
                Comment
              </button>

            </div>

          </div>

        </div>

      )}

    </Layout>

  )

}

export default CrimeResponse
