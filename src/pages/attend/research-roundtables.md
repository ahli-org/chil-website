---
layout: "../../layouts/MarkdownLayout.astro"
title: "Research Roundtables"
eyebrow: "Program"
---

## Overview

Session 1:  
**Date:** Monday, June 29  
**Time:** 1:00 PM – 1:45 PM (45 minutes)

Session 2:  
**Date:** Tuesday, June 30  
**Time:** 1:00 PM – 1:45 PM (45 minutes)  
[View Schedule](/attend/schedule/)

Research Roundtables are dynamic and collaborative sessions designed to foster meaningful dialogue and generate innovative ideas in a focused, small-group setting. Each roundtable brings together a diverse mix of participants—ranging from researchers, clinicians, and industry professionals to policy experts and community leaders—to discuss critical topics at the intersection of machine learning and health.

Guided by moderators, the sessions encourage open exchange of perspectives, rigorous exploration of challenges, and the co-creation of actionable solutions. The format emphasizes inclusivity and engagement, ensuring every voice is heard, while promoting an environment of respect and intellectual curiosity. The outcomes of these discussions often inform future initiatives, white papers, or collaborative projects.

## How to Participate

We will host in-person roundtables on both days of the conference. The roundtables will run concurrently and last 45 minutes in duration. Topics will be the same on each day.

## Topics

* * *

#### 1\. The Paper Paradox: Why Thousands of Models Exist but Few Save Lives 

**Chairs:** Lucy Lu Wang, Danny Eytan

**Location:** Meeting Room (Building Cure)

1. What is the utility of communicating ML for Healthcare findings through academic papers? Does the format of an academic paper fully capture the constraints of the full pipeline of modeling, deployment, and evaluation? 
2. Would it be useful to publish negative results for ML in healthcare topics? What counts as a negative result? What is the correct way to communicate failures in research?
3. Are our evaluation norms selecting for publishable models rather than useful interventions?
4. How can we incentivize academic researchers to build for problems that are grounded in real use cases? How would we incentivize this within the scope of the research paper publication cycle?
5. What about reviewing something like “deployment-readiness” or having authors provide a deployment feasibility statement? 
6. What other solutions should be considered for this problem?

* * *

#### 1\. Causal Inference and Counterfactuals for Healthcare

**Chairs:** Shengpu Tang, Nitish Nagesh

1. What kinds of models allow practitioners to simulate counterfactual treatment decisions? 
2. What is the downstream utility of performing causal inference/counterfactual reasoning? Is it broadly agreed upon in research/practice?
3. Is healthcare data suitable for these techniques? Can we improve healthcare data collection methods to further enable causal inference research/studies?
4. Considering the conditional average treatment estimation paradigms for observational and randomized controlled data, what are ways in which CATEs are being deployed in current clinical workflows? 
5. How can we frame the g-estimation formula for counterfactual estimation in observational studies through marginal structural models while considering the effect of unobserved confounders?
6. What are ways in which you are incorporating causal machine learning for treatment policy estimation? As an extension, how can causal reinforcement learning approaches, doing interventions in a hypothetical world, be applied to the real world?
7. What are ways in which causal discovery can be used as a precursor to causal inference/reasoning and subsequently, counterfactual estimation? 
8. Reasoning in the realm of digital twins for health.

* * *

#### 2\. Improving AI Literacy for Professionals in ML for Healthcare

**Chairs:** Sam Finlayson, Jim Taylor

1. Do we want a future in which practitioners (e.g., non-modeling/technical people) can use AI agents in their standard workflows? What are the motivations for and against this future?
2. If we do want a future in which practitioners can use AI agents, what should be the approach to standardization, safety, and accountability?
3. What does a future with AI agents enable for healthcare? Why is it not possible without AI?
4. How should the use of AI in medicine be incorporated into training programs for physicians, nurses and other healthcare professionals?
5. Should demonstrating AI competency be a requirement for board certification?  If so, what would this look like?

* * *

#### 3\. Frameworks for Measuring Value: Towards Reliable Health AI

**Chairs:** Chris Longhurst, Clara Lin

1. What is the downstream metric that we care about? Is it patient outcomes, hospital bottom line, efficiency, time? How do we measure these metrics, and what are the tradeoffs to consider? What is a meaningful threshold & timeline for improvement or ROI realization? 
2. Who gets to make the decisions about what the downstream metrics are? Is it hospital C-suite/government/academics/bioethicists (or all of the above)? How do we ensure that the broad deployment of AI methods still benefits patients? What are your “exit criteria/triggers” for when to sunset the project/tool?
3. Is Health AI more “unitary” (e.g., similar guidelines and recommendations across hospital systems), or is it more “localized” (e.g., every hospital has separate rules and use cases)? Extending this further, can reliable AI be purchased “off the shelf”, or is value/validity inherently localized?
4. As a leader, how do you decide when to fund a ‘moonshot’ AI project with high potential but zero immediate ROI, versus a ‘boring’ automation tool that saves 10 minutes of charting but has clear value?
5. We often use ‘human oversight’ as a safety measure. But if the AI is 95% accurate, humans tend to over-rely on it (automation bias). Is ‘human-in-the-loop’ a reliable safety framework, or is it just a way to offload liability?

* * *

#### 4\. From Metrics to Morals: Aligning AI Evaluation with Patient Safety and Health Equity

**Chairs:** Emily Alsentzer, Marciela Cruz

1. How can we design pre-deployment evaluations that meaningfully approximate real-world clinical use, rather than testing models in sanitized benchmark settings?
2. What should the threshold for deployment be? How does this threshold differ by the AI use case?
3. What are the appropriate metrics for patient safety and health equity, especially for generative AI?
4. What does responsible human oversight of AI look like in practice, and how can clinicians use these tools without inadvertently amplifying bias or worsening inequities in patient care?
5. How can evaluation frameworks incorporate patient lived experience and trust, in addition to technical metrics?

* * *

#### 5\. Healthcare Datasets and Standardization Protocols

**Chairs:** Matthew McDermott, Jason Fries

1. What are the current barriers to the field making more effective use of data standards?
2. How can we turn standardized data into meaningful benchmarks across public and private data?
3. How do the nature of data standards change in the era of LLMs?
4. How can we make it easier for people to use data standards?
5. To what extent is it / do we want to make it possible for people to be able to easily use health data without understanding its clinical context?

* * *

#### 6\. Multimodal Models for Healthcare

**Chairs:** Joe Janizek, Andrew Goodwin

1. The term “multi-modal” currently comprises a diverse set of models with different strengths and applications, ranging from jointly learned embedding spaces for text and images (CLIP) to auto-regressive language models adapted to accept visual tokens interleaved with language tokens (LlaVa, most of the frontier models) to more traditional supervised learning models trained from multi-modal features. Which of these are most impactful in healthcare AI today, and which will be most impactful going forward?
2. One of the biggest challenges to building multimodal AI in healthcare is the lack of high quality data linked at the patient level across numerous modalities. While resources like MIMIC/Physionet and UK Biobank partially address this problem, this is certainly a harder problem than unimodal modeling. Given the data landscape that exists today, how can we build adequate datasets to train clinical-quality large multimodal AI models?
3. When a human physician interprets a medical image, the text prompt (exam indication) can have a significant impact on the search pattern. For instance, if an exam says that the index finger is hurting, a radiologist can dynamically allocate additional time/compute/resolution to that digit. Do current multimodal models seem to have a lot of _synergy_ between the computation related to different modalities? Or do they currently act more like linear models built on good featurizations of individual modalities?
4. Numerous papers have shown that VQA benchmarks have a large proportion of questions that can be answered by LMMs without even looking at the image. While these papers propose post-hoc fixes like filtering out the specific questions that don’t require images, how can we prospectively build more interesting multimodal benchmarks? What are the most interesting tasks that can be tackled through multimodal modeling?

* * *

* * *

#### 8\. Rare Diseases and Reaching the Bottom Billion

**Chairs:** Mjaye Mazwi, Manish Batra

1. How do you approach modeling using extremely sparse and small datasets?
2. What lessons have we learned from other global health interventions that can apply to rare diseases to improve outcomes (e.g., optical sensors to gather medical data in resource constrained settings)?
3. What sorts of incentive structures promote work in reaching the bottom billion and rare diseases?

* * *

#### 9\. On the Opportunities and Risks of LLM Agents in Healthcare Solutions

**Chairs:** Peniel Argaw, Michael Wornow

1. Where do we want to see AI agents deployed in healthcare? What makes an application area more or less compelling? Are there certain areas that are completely off-limits? 
2. Who should build these AI agents? Is it a third-party company or an in-house AI team?
3. What would convince you to deploy a fully autonomous agent, and what workflow would it solve?

* * *

#### 10\. Sensor Foundation Models and Wearable Sensor Paradigmss in Healthcare Solutions

**Chairs:** Xin Liu, Max Xu

1. Now that Sensor FMs are established as a paradigm, various problems have been already well established, capabilities, data dependencies, pretext learning tasks, what is the next frontier? (e.g. explainability, LLM integration, etc…)
2. Unfortunately, much of foundation model capabilities are bottlenecked by large amounts of compute and data, which are ample in industry. How can better industry + academic partnerships be incentivized and forged?
3. Foundation models inherently unlock novel insights from the sensor data due to the large amount of non-linearity and complex relationships learned. How can we know or balance the optimistic  predictive capabilities of such large-scale models vs. inherent sensor limitations? E.g. much research has shown that is very hard, supposedly impossible, to predict blood pressure from PPG data, but recent research has shown how foundation models can be used to predict hypertension
4. How can wearables be integrated into clinical practice to be used in conjunction with doctors and our existing clinical support systems?

* * *
