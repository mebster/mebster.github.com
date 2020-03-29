---
layout: default
modal-id: 3
short-name: enabling-ai
img: satellite.png
alt: image-alt
customer: European Space Agency
achievement: Use edge to cloud architecture to solve ESA's big data challenge
---

The other early success of our edge solution (see <button type="link" class="link-button" data-toggle="modal" data-target="#post-first-edge">this post</button> to read about our contribution to the genesis of edge computing) was with the [European Space Agency](https://esa.int) (ESA). With the need to process on the ground terabytes of data daily and at numerous locations across the globe, ESA could not afford, nor was it feasible, to move this much raw data to the cloud. [Mark Dumville](https://www.linkedin.com/in/mark-dumville-a952375), CEO of [NSL](https://www.nsl.eu.com), whom I knew from early work with ESA on Galileo related work, had the foresight to imagine combining SixSq's edge capability and NSL's GNSS signale processing mastery. The result is an edge-to-cloud solution, capable of precessing petabytes of data daily, using a sophisticated strategy between processing stations (edge) and the cloud. 

During the bid process for this contract, we beat straight out several consortium, including mighty European organisations, in space, defence and cyber security. If there was one case of David defeating Goliath, it is it, and I'm immensely grateful for ESA to have put its trust in the hands of SMEs like SixSq and NSL. Our proposal put forward an edge-to-cloud architecture, providing a scalable, yet resilient solution. Further, with a potentially large addressable market, our ability to together deliver the resulting solution as a service was I think a winner. You can hear from [Vicente Navarro](https://www.linkedin.com/in/ivicentenavarro/) talking about this project in [this video](https://youtu.be/l8XD8bHceOY).

The *Orchestra Director* for this work at SixSq is [Konstantin Skaburskas](https://www.linkedin.com/in/konstantinskaburskas/). Konstantin was the first engineer to join SixSq's core development team, from CERN. Konstantin has this amazing super power of being able to cast and adapt SixSq software technology and knowledge to solve customer problems.

The result of this project is a big data solution, leveraging an edge-to-cloud architecture, where each ground station records TDs of data daily, from the Global Navigation Satellite System (GNSS) (including the American GPS, Russian GLONASS and European Galileo) signal range. Users can then deploy AI or other analysis applications to the edge, to sieve through the data and tag interesting *events* for replication in the cloud.  With limited local storage (288TB), the station has a data retention of a few days, before old data gets discarded and replaced by new data.

Since this is an edge system, which requires tolerance to network jitter and interruptions, data that is tagged for cloud transfer is cached locally if network is lost. The system then attempts to resume data transfer when the connection is re-established. But not only this level of sophistication is required for high throughput system, it need to also work at scale, with the multiplication of stations.

While the edge component (aka the stations) of the system provides a near real-time opportunity to react to raw data processing, the main purpose of detecting interesting events and having their corresponding data replicated in the cloud is to build meaningful and rich time series or historical datasets. For example, when a solar flair hits the Earth, it interferes with the GNSS signals, and this will show in the raw data. The same is true for many natural and artificiel phenomenons. These are the famous *events* researchers and users of the system are looking for.

Some scientistes (and I'm sorry I don't have the source reference) have postulated that before an earthquake occurs, early sign of the impending episode might be detectible in the raw GNSS signal. If this is true, our system should be able to record the data for scientistes to verify or not this claim. When looking for early warning systems, every second could potentially save lives. It's therefore well worth it to find out. 
