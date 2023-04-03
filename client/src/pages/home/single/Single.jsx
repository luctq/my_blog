import React from 'react'
import SinglePost from '../../../components/singlePost/SinglePost'
import SideBar from '../../../components/sidebar/SideBar'
import "./single.css"
export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>
  )
}
