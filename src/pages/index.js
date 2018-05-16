import React, { Component } from "react";
import Vimeo from '@u-wave/react-vimeo';
import { Fullpage, HorizontalSlider, Slide } from "fullpage-react";

// import Home from "../components/Home";
// import Blog from "../components/Blog";
// import Lab from "../components/Lab";
// import Photos from "../components/Photos";

import 'basscss/css/basscss.css';
import '../style/index.css';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: this.mobileCheck(),
      Fullpage: 0,
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };
  }

  mobileCheck() {
    if (typeof window === "undefined" || !window) return false;
    if (typeof navigator === "undefined" || !navigator) return false;
    let check = false;
    (function(a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }

  render() {
    const { isMobile } = this.state;
    const slideNumber = this.state.Fullpage;
    return (
      <div className="mt2 mx-auto px2" style={{ maxWidth: '35rem' }}>
        <h1 className="mb2">Sinking Civilisations</h1>
        <h3 className="mt0">The plight of the Pacific Islanders, as a narrative for climate change.</h3>
        <Vimeo
          video="269289349"
          showPortrait="false"
          background="false"
          showByline="false"
          showTitle="false"
          color="blue"
        />
        <p>A film about a people who stand to lose everything, refugees not fleeing from a war, or an oppressive government, but from climate change. The islanders of south pacific developing states, are currently facing an existential crisis, which is threatening to wipe out their homes, lands and way of life. This is a story about how they survive in such adversity, what will be lost given the dark predictions, and what is being done to help.</p>
        <h2>The Project</h2>
        <p>We first heard about this story through a conversation with Polly Higgins who is a barrister and international environmental lawyer. She is working to reduce global warming by creating a law which would hold the most serious offenders - states and corporations, accountable for ecological damage. She pointed to the Pacific islands as an example of global warming threatening current civilisations, and this was eye-opening to us, as we had only heard of global warming in the context of its potential to affect our lives in the future.</p>
        <p>We discovered that there is very little news and public conversation about this and we wanted to change that by going to the islands and researching in the best way we know how, through film. Polly explained that a film about the plight of the islanders is also cardinal to her own cause, because making this more visible will put pressure on politicians and states to back a criminal law. Below, we go over in more detail what is happening on these islands, our plan for the documentary, and the impacts the project could have, in regards to establishing a legal precedent to start truly changing our behaviour towards the planet.</p>
        <h2>The Story</h2>
        <p>The Pacific islands sit northeast of Australia, in an area called Oceania. They include three major groups of islands: Polynesia, Micronesia and Melanesia. Many of these islands are Small Island Developing States (SIDS), which are characterised by limited resources, growing populations and susceptibility to natural disasters.</p>
        <img style={{ width: '100%' }} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1526040379/ppn5yv5vh5mgpeelqwh0.jpg" />
        <p>The global average for sea level rise is 3mm per year, however around the Pacific islands it is closer to 12mm per year and since the mid 20th century, 12 of the Solomon Islands have been fully submerged by rising sea levels. With many of the other Pacific islands just feet above water, flooding is a constant threat to clean water, food supplies and is forcing many to relocate from disappearing shorelines.</p>
        <p>The islands are also battling an increasing number of extreme weather events, such as cyclones. This increase has been linked to rising sea surface temperatures and the increased moisture carrying capacity of the air due to atmospheric temperature rise.</p>
        <img style={{ width: '100%' }} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1525963059/xudjfcdcp68zgatyins1.jpg" />
        <p>Estimates of sea level rise by the end of the century range from one to three meters. This has contributed to the global estimate of 200 million climate change refugees by 2050.</p>
        <p>These threats have forced islands, which are already under constant threat from cyclones, to consider moving their entire populations to new islands. Kiribati bought a piece of land in Fiji, large enough to fit its population of 100,000, in the event they can't protect their island using other measures. </p>
        <p>The inhabitants of these islands have lived for thousands of years on lands, which might now be seen as much a part of their identity, as their traditions and languages. It is a story of a people being forced from their lands as a consequence of western imperial power, in this case, the west's careless attitude toward the environment.</p>
        <p>We have come together because we want to understand how it is for the people on these islands to live under such an existential threat.</p>
        <h2>The Plan</h2>
        <p>In July of 2018, we will travel to Vanuatu, to spend a month living and filming with local people and interviewing officials. We want to document and share the beauty and peril in a culture left largely untouched by industrial imperialism. We want to build pressure on those in positions of power, to contribute resources and ameliorate where possible such serious threats to a people's way of life.</p>
        <h2>Ask</h2>
        <p>We are asking for money to meet our shortfall in covering the flights, and basic living for a crew of three. The HuffPost has lent us some of the equipment and the rest we can provide ourselves. We have been reaching out to family and charities, CAFOD have generously offered some financial support and even with our own money and family help, we still need your support.</p>
        <h2>Impact</h2>
        <p>Threats like those facing these islands are not going to go away if we don't find ways of reducing our effects on the environment. One person on the front line of the search for a pragmatic solution to this question is Polly Higgins an ex-corporate lawyer now running the nonprofit “Mission Lifeforce”. Her goal is to challenge the destruction of ecosystems, by making it an international crime. Holding individuals in corporations and states accountable for their ecological damage leading to more responsible ecological behaviour.</p>
        <p>Our hope is that this documentary will help in Polly’s broader mission by keeping the issue in the public sphere and by putting pressure on politicians to back the criminalising of ecocide.</p>
        <p>The Rome Statute is the key to this. As of 2017, 123 states agreed to outlaw: genocide, crimes against humanity, war crimes and crimes of aggression as the most serious crimes of concern. In 2002, it established the international criminal court - the highest level of court, and in its original drafting it included ecocide, which is defined as:</p>
        <p className="ml3">“loss or damage to, or destruction of ecosystem(s) of a given territory(ies), such that peaceful enjoyment by the inhabitants has been or will be severely diminished.”</p>
        <p>However, due to lobbying by America, United Kingdom and the Netherlands, ecocide was removed in the final drafting. Polly’s goal since 2010 has been to establish ‘Ecocide’ as an international crime.</p>
        <p>In our interview with Polly, she described what it would take for ecocide to become an international crime and how these Pacific islands are the key.</p>
        <p className="ml3">“That requires a signatory state a country that is signed up to the Rome Statute to propose it. That's something that the Pacific can do, indeed not just one, it could be a group of Pacific states islands that take it forward. When that happens, that proposal is then tabled and drafting of the legislation is accepted. Then it’s a matter of other signatory states, opening up the process for ratification of that as an amendment, and when enough states - two-thirds of them sign, it becomes international criminal law.”</p>
        <p>Once proposed in this way, it cannot be vetoed. </p>
        <img style={{ width: '100%' }} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1525964413/z2ezgejdalcmg01mopo8.jpg" />
        <p>The focus of this documentary is on understanding the situation in Vanuatu, a country once rated as one of the happiest nation in the world, but has recently been stated as one of the riskiest places to live. We want to understand how they protect themselves against the endless cyclones and how they are coping with the imminent threat of rising sea levels.</p>
      </div>
    );
  }
}
