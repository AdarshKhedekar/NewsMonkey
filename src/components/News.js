import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  lorem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quisquam alias nesciunt minus beatae veniam deserunt nisi";
  article = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Oslo shooting: Two killed in nightlife district attack",
      description:
        "Police have arrested a suspect but no motive for the attack has yet been given.",
      url: "http://www.bbc.co.uk/news/world-europe-61933817",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/861B/production/_125613343_hi076941598-1.jpg",
      publishedAt: "2022-06-25T03:37:20.9625403Z",
      content:
        "Two people have been shot dead and 14 injured, some seriously, in a shooting at a nightclub and nearby streets in the centre of the Norwegian capital Oslo, police say.\r\nThere was gunfire at about 01:… [+1472 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Eighteen dead in mass break-in to Spanish enclave of Melilla",
      description:
        "A huge crowd of migrants tries to cross into Melilla in North Africa, with many killed and injured.",
      url: "http://www.bbc.co.uk/news/world-africa-61934163",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/A817/production/_125613034_mediaitem125613030.jpg",
      publishedAt: "2022-06-25T01:52:16.4306899Z",
      content:
        "Eighteen migrants have died and others were injured when a huge crowd tried to cross into the Spain's North African enclave of Melilla, officials from neighbouring Morocco say. \r\nReports say some of … [+767 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC Sport",
      title: "PSG president cleared of corruption charge",
      description:
        "Paris St-Germain president Nasser Al-Khelaifi is acquitted of a corruption charge into the awarding of media rights for Fifa tournaments.",
      url: "http://www.bbc.co.uk/sport/football/61923886",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/C81E/production/_125603215_nasseral-khelaifi_getty.jpg",
      publishedAt: "2022-06-25T01:37:25.9617655Z",
      content:
        "Nasser Al-Khelaifi is the president of Paris St-Germain and chairman of BeIN media group\r\nParis St-Germain president Nasser Al-Khelaifi has been cleared of corruption by a Swiss appeals court.\r\nEx-Fi… [+2055 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Japanese man loses USB stick with entire city's personal details",
      description:
        "A Japanese worker lost a USB stick containing the data of 460,000 people during a night out.",
      url: "http://www.bbc.co.uk/news/world-asia-61921222",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/18006/production/_125601389_gettyimages-1230479227.jpg",
      publishedAt: "2022-06-25T01:37:22.0396904Z",
      content:
        "By Matt MurphyBBC News\r\nFor many, after-work drinks are a common way of relaxing after a busy week.\r\nBut one worker in Japan could be nursing a protracted hangover after he lost a USB memory stick fo… [+1546 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Afghanistan earthquake: Survivors count horrific cost",
      description:
        "Near the epicentre of the quake that struck Afghanistan this week, houses lie in ruins.",
      url: "http://www.bbc.co.uk/news/world-asia-61929723",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/9543/production/_125611283_mediaitem125612073.jpg",
      publishedAt: "2022-06-24T21:07:22.7116178Z",
      content:
        "By Secunder KermaniBBC News, Paktika province, Afghanistan\r\nRahmat Gul's family is busy erecting a tent that has just been donated by a former Afghan politician. \r\nIt stands next to another, donated … [+3357 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Pompeii: Ancient pregnant tortoise surprises archaeologists",
      description:
        "The reptile's 2,000-year-old remains are discovered by archaeologists buried in volcanic ash and rock.",
      url: "http://www.bbc.co.uk/news/world-europe-61931172",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/BAB9/production/_125610874_hi076925295.jpg",
      publishedAt: "2022-06-24T19:37:22.8062982Z",
      content:
        "By Leo SandsBBC News\r\nWhen Mount Vesuvius erupted nearly 2,000 years ago Pompeii's ancient residents were frozen in place by ash.\r\nSo too it turns out were the city's flora and fauna - including a pr… [+2465 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "USS Samuel B Roberts: World's deepest shipwreck discovered",
      description:
        "The US Navy ship sank off the Philippines during a ferocious WWII battle with the Japanese fleet.",
      url: "http://www.bbc.co.uk/news/science-environment-61925862",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3B88/production/_125604251_mediaitem125604250.jpg",
      publishedAt: "2022-06-24T15:22:19.7137923Z",
      content:
        "By Jonathan AmosBBC Science Correspondent\r\nExplorers have found the deepest shipwreck ever identified, a US navy destroyer escort sunk during WWII.\r\nThe USS Samuel B Roberts went down during the Batt… [+826 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Boris Johnson vows to keep going amid by-election losses and ministerial resignation",
      description:
        'But former Tory leader Michael Howard says the country would be "better off" if Mr Johnson resigned.',
      url: "http://www.bbc.co.uk/news/uk-politics-61925670",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/0BFE/production/_125607030_f7e982e6-738e-4a79-9d60-d2b3a49a2887.jpg",
      publishedAt: "2022-06-24T15:07:23.2589074Z",
      content:
        'By Kate WhannelBBC News\r\nMedia caption, PM Boris Johnson: "There is more that we have got to do"\r\nBoris Johnson has vowed to "keep going" despite two by-election defeats and the resignation by party … [+3634 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Severodonetsk: Ukrainian forces told to retreat from key eastern city",
      description:
        "Severodonetsk is the focus of Russia's invasion as Moscow tries to take control of large parts of the east.",
      url: "http://www.bbc.co.uk/news/world-europe-61920708",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/FE56/production/_125601156_mediaitem125601152.jpg",
      publishedAt: "2022-06-24T06:52:23.2285991Z",
      content:
        "Ukrainian forces in Severodonetsk have been told to withdraw, according to the top regional official. \r\nThe city is the focus of Russia's invasion as Moscow tries to take control of large parts of ea… [+1315 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "US Senate passes first gun control bill in decades",
      description:
        "Fifteen Republicans joined Democrats to approve the bill in the wake of a spate of mass shootings.",
      url: "http://www.bbc.co.uk/news/world-us-canada-61919752",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2022-06-24T02:52:20.82728Z",
      content:
        "It follows mass shootings last month at a supermarket in Buffalo, New York, and a primary school in Uvalde, Texas, that left a combined 31 people dead.",
    },
  ];
  constructor() {
    super();
    // console.log("hwllo is constructor");
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
      totalResult: 0,
      isdisable: false
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87994f8b3e3047ab868a5ec690564b2f&page=1&pageSize=${this.props.pagesize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(this.state.totalResult);
    this.setState({
      article: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading:false
    });
    // console.log(this.state.totalResult);
  }
  handleNextClick = async () => {
    // console.log(this.state.totalResult);
    if (this.state.page + 1 <= Math.ceil(this.state.totalResult / this.props.pagesize)) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87994f8b3e3047ab868a5ec690564b2f&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({loading:true});
      this.setState({ 
        page: this.state.page + 1,
        article: parsedData.articles,
        loading:false,
        totalResult: parsedData.totalResults
      });
      if(this.state.page+1 === Math.ceil(this.state.totalResult / this.props.pagesize)){
          this.setState({isdisable:true})
      }
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87994f8b3e3047ab868a5ec690564b2f&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ article: parsedData.articles,page: this.state.page - 1,isdisable:false,loading:false,totalResult: parsedData.totalResults});

  };
  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1});
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87994f8b3e3047ab868a5ec690564b2f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(this.state.totalResult);
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
      loading: false
    });
    
  };
  render() {
    return (
      <>
          <h1 style={{ color: "black", marginTop: "90px", marginLeft: "110px" }}>NewsMonkey - Top Headlines</h1>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResult}
          loader={this.state.loading && <Spinner/>}
        >
          <div className="container">
          <div className="row">
            {!this.state.loading && this.state.article.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <Newsitems
                      title={ele.title ? ele.title.slice(0, 45) : this.lorem}
                      description={
                        ele.description
                          ? ele.description.slice(0, 88)
                          : this.lorem
                      }
                      imageUrl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://ichef.bbci.co.uk/news/1024/branded_news/861B/production/_125613343_hi076941598-1.jpg"
                      }
                      newsUrl={ele.url}
                      date={new Date(ele.publishedAt).toGMTString()}
                      source={ele.source.name}
                      author={ele.author}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
