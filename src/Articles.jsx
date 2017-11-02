import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import AtricleListEntry from './ArticleListEntry.jsx';







const Articles = (props) => (

  
  <Thumbnail className="card" id='items'>
	  {props.articles.map(function(newsItems,index){
	  	return  <AtricleListEntry key={ index } list={newsItems}></AtricleListEntry> 
	  })}
  </Thumbnail>

	)



export default Articles