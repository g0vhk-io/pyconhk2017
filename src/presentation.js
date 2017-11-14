// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Code,
  CodePane,
  Cite,
  Deck,
  Heading,
  Layout,
  Fit,
  Fill,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import meImg from './me.jpg';
import frustratedImg from './frustrated.png';
import codingImg from './coding.jpg';
import pdfImg from './pdf.png';
import databaseImg from './database.png';
import database2Img from './database2.png';
import ckanImg from './ckan.png';
import xmlImg from './xml.png';
import haystackImg from './haystack.png';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#666",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Helvetica",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
           Python & Open Data Problem in Hong Kong

          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={10} italic>
            The story of g0vhk.io
          </Text>
	      <br/>
	      <br/>
		  PyCON HK 2017
	      <br/>
	      <br/>
          <Text margin="20px 0 0" textColor="quartenary" textSize={20}>
            <br/><br/>
			Ho Wa Wong,<br/>
            info@g0vhk.io
          </Text>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Today's Agenda</Heading>
          <List>
            <ListItem>Hong Kong Open Data Problem</ListItem>
            <ListItem><Link href="http://g0vhk.io">g0vhk.io</Link></ListItem>
            <ListItem>Tech Stack</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>About Myself</Heading>
          <br/>
          <br/>
          <Layout>
          <Fit>
            <img src={meImg}/>&nbsp;
          </Fit>
		  <Fit>
			&nbsp;
	      </Fit>
          <Fill>
          <List>
            <ListItem textSize={30}>Python & Open Source Developer</ListItem>
            <ListItem textSize={30}>Open Data Advocate</ListItem>
            <ListItem textSize={30}>Founder of <Link href="http://g0vhk.io">g0vhk.io</Link></ListItem>
          </List> 
          </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Problem of Open Data</Heading>
          <br/>
          <img src={frustratedImg} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Problem of Open Data</Heading>
          <List>
            <ListItem>Government does not know what is it</ListItem>
            <ListItem>Not enough information freedom</ListItem>
            <ListItem>Data not machine processable</ListItem>
            <ListItem>Blah Blah Blah</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Problem of PDFs</Heading>
          <Appear>
            <Text>Not PDF itself...</Text>
          </Appear>
          <Appear>
            <Text>But our government uses the wrong file format.</Text>
          </Appear>
        </Slide>
         <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Civic Hacking</Heading>
          <Appear>
            <List>
               <ListItem>Solve real life social problem with tech</ListItem>
               <ListItem>Open Source</ListItem>
               <ListItem>Open Data</ListItem>
               <ListItem>Tech</ListItem>
               <ListItem>Problem</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">g0vhk.io</Heading>
          Demo
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Tech Stack</Heading>

          <img src="http://lucene.apache.org/solr/assets/identity/Solr_Logo_on_white.png" width="15%" />&nbsp;
          <img src="http://haystacksearch.org/images/logo.png" width="40%"/>&nbsp;
          <img src="https://scrapy.org/img/scrapylogo.png"/><br/>
          <img src="https://www.djangoproject.com/s/img/logos/django-logo-negative.png" width="25%"/>&nbsp;
          <img src="https://ckan.org/files/2017/03/Logo_438x144.png" width="30%"/>&nbsp;
          <img src="https://mariadb.org/wp-content/uploads/2015/09/MariaDB-Foundation-vertical-small.png" width="15%" />   <br/>
          <Code>
            lxml + pdfminer + ...
          </Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>pdfminer</Heading>
          <List>
            <ListItem>Python PDF parser</ListItem>
            <ListItem><Link href="https://github.com/euske/pdfminer">Github</Link></ListItem>
            <ListItem>Turn hansard into django model</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>pdfminer</Heading>
          <br/>
          <Layout>
            <Fit>
               <img src={pdfImg} />&nbsp;
            </Fit>
            <Fit>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             &nbsp; &rarr; &nbsp;
            </Fit>
            <Fit>
               <img src={databaseImg} />
            </Fit>
          </Layout>
        </Slide>
         <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>lxml</Heading>
          <br/>
          <Layout>
            <Fit>
               <img src={xmlImg} />&nbsp;
            </Fit>
            <Fit>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             &nbsp; &rarr; &nbsp;
            </Fit>
            <Fit>
               <br/>
               <br/>
               <br/>
               <img src={database2Img} />
            </Fit>
          </Layout>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>morph.io</Heading>
	      <List>
			<ListItem>morph.io: A scraping platform</ListItem>
			<ListItem>Run Scrapy Daily</ListItem>
			<ListItem>with SQLLite Database</ListItem>
		  </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Django</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Haystack</Heading>
          <List>
            <ListItem>Modular search for Django</ListItem>
            <ListItem>supports Solr, Elasticsearch, Whoosh</ListItem>
          </List>
		  <img src={haystackImg} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>CKAN</Heading>
          <br/>
          <br/>
          <img src={ckanImg} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>Thank you & Happy Python !</Heading>
        </Slide>
      </Deck>
    );
  }
}
