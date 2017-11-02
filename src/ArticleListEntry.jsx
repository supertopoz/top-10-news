import React from 'react';
import Media from 'react-bootstrap/lib/Media';
import Panel from 'react-bootstrap/lib/Panel';
import Emotion from './Emotion.jsx';
import moment from 'moment';



const AtricleListEntry = (props) => (


  <Panel>
  <Media><a href={props.list.url} target="_blank">
    <Media.Left align="top">
      <Panel>
      <img width={200} src={props.list.urlToImage}  alt="news thumb"/>
      <h3>Emotion Ratings:</h3>
      <ul className="unstyled">
      { 
        Object.keys(JSON.parse(props.list.emotion)).map(function(feeling,index){
         var list = JSON.parse(props.list.emotion);
         // eslint-disable-next-line
         var total;
           for (var i in list){
             total += list[i];
           }
         var score = (100 * list[feeling]).toFixed(2)
         return <Emotion key={index} feel={feeling.toUpperCase()} points={score}></Emotion>
      })}
        </ul>
        </Panel>
    </Media.Left>
      <Media.Body>
        <Media.Heading className="article-heading">
  		   {props.list.title}
        </Media.Heading>    
         <p>{props.list.description}</p> 
         <h4>{moment(props.list.publishedAt).format('DD-MMM-YYYY : hh:mm:ss')}</h4> 
     </Media.Body>
     </a>
   </Media>    
   </Panel>
 
	)

export default  AtricleListEntry 