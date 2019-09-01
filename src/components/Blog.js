import React, { Component } from 'react';
import '../App.css';
import ReactMarkdown from 'react-markdown';
import { Card, CardTitle, CardPanel, Button, Row, Col } from "react-materialize";
import { Link } from "react-router-dom"



class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      files: []
    }
  }

  postLink={
    width:'100%',
    margin:'0 auto'

  }

  blog={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: '10%'
  }
  posts={
    width:'75%',
  }

  translateTitle(title){
    return (title.substr(0,(title.length - 3)).split('_').join(' '))
  }

  componentDidMount(){
    fetch(`https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`)
    .then(response =>  response.json())
    .then(data => {
      let files = []
      // Loop through files
      const fileNames = Object.keys(data.files);
      for (let i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        let content = data.files[fileName].content
    
        files.push({"filename":`${fileName}`, "content":`${content}`});
      }
      this.setState({ 
        isLoaded: true, 
        files
      })
    },(error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })  
  }

  render() {
    const { error, isLoaded, files } = this.state;
    console.log('files_state: ', files)
    if(error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div style={this.blog}>
        <div style={this.posts} className="Blog">
            <h3>Posts</h3>
              {files.map(item => { 
                return (
                <div style={this.postLink}>
                  <hr className="Divider Grey"/>
                  <div  className="PostLink"><b><a  href={`/blog/${item.filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >{this.translateTitle(item.filename)}</a></b></div>
                  {/* <ReactMarkdown source={item.content} /> */}
                </div>
                )
              })
              }
          </div>
        </div>
      );
    }
  }
}

export default Blog;
