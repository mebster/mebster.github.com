---
layout: default
modal-id: 1
short-name: cern
img: cloud-cern.png
alt: cloud computing
employer: CERN
achievement: Introducing cloud technology to CERN
---

In 2007, at a conference in Manchester, I heard [Tony Hey](https://www.linkedin.com/in/tony-hey-a8819b14/) present two new services that Amazon had just announced: the Elastic Compute Cloud (EC2) and the Simple Storage Service. Using the web to deliver on-demand computing, in a simple and scalable way was, to me, a paradigm shift. In the '90s, so many giants had tried and failed to deliver a successful _on-demand computing service_, yet Amazon's proposal was simple and elegant.

At that time, CERN IT's strategy was entirely focused on _grid computing_, building massively distributed job execution clusters, using traditional concepts. The collaboration went as far as even maintaining its own [Linux distribution](https://www.scientificlinux.org), imposed on all users. Although the collaboration dabbled in new technologies like web services and WSRF (remember that?!), it never really took off.

Cloud computing was transformational on so many levels. From the technology stand-point, virtualisation was solving the problem of isolation and giving users the choice of running their own operating system (no need to impose anything here). On the service delivery side, a commercial offering was available via a spectacularly simple online contract (no more lawyers needed). This challenged the different research organisations contributing IT resources to the grid effort, including CERN, to better understand their total cost of ownership (TCO), so they could compare their own costs with the prices proposed by Amazon.

My enthusiasm was not always welcomed, from gentle dismissals to stronger rebuffs.  But my boss back then, [Bob Jones](https://www.linkedin.com/in/bobjonescern/), was kind enough to give me space such that I could perform a comparative study between the grid and the cloud, and write a [position paper](https://edms.cern.ch/ui/file/925013/4/EGEE-Grid-Cloud-v1_2.pdf).

You can read the paper if you want the details, but if you're impatient, the main conclusion was that __the cloud was here to stay, and grid applications would be built on top of the cloud__. This turns out to be true.  I also called for open source implementations of cloud computing services, which was eventually answered by OpenStack, CloudStack and OpenNebula.

I'd like to acknowledge the contributions of my reviewers for this paper. Special thanks go to [James Casey](https://www.linkedin.com/in/jamesc000) for keeping me honest and making me resist attempts to water down my conclusions, and of course [Cal Loomis](https://www.linkedin.com/in/charlesloomis), who was brave enough to launch into the crazy adventure with me that became SixSq (you can read about our adventures in <button type="link" class="link-button" data-toggle="modal" data-target="#post-sixsq">this post</button>).

CERN has of course since become a strong advocate of cloud technologies, now running one of the largest scientific clouds. CERN even became a customer of SixSq, and several SixSq team members are from CERN. Happy days!
