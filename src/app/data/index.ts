import { iconMap } from "../utils/icons";
import { Data } from "../types";

export const allData: Data[] = [
  {
    id: 1,
    category: "Ads",
    allcontents: [
      {
        id: 1,
        icon: iconMap.GiClick,
        name: "High-Converting Ad Copies for Social Media & Google Ads!",
        description: `🔥 Engage • Convert • Grow \n👋 Let's Create Winning Ad Copies for You!`,
        questions: [
          {
            que: "Which platform do you need ad copy for?",
            required: true,
            placeholder: "e.g., Facebook, Instagram,Google Ads,LinkedIn...",
          },
          {
            que: "What is your business category?",
            required: true,
            placeholder: "e.g., Clothing, Tech, Real Estate, Fitness, etc.",
          },
          {
            que: " What is the primary goal of your ad?",
            required: true,
            placeholder:
              "e.g., Increase sales, Generate leads Build brand awareness Drive website traffic",
          },
          {
            que: "If you have a special offer or USP, please mention it:",
            required: true,
            placeholder: "e.g., 50% off, Free Delivery, Cash on Delivery, etc.",
          },
          {
            que: "Any specific keywords or phrases you want included?",
            required: true,
            placeholder: "Type here...",
          },
        ],
        prompt:
          "Write a persuasive ad copy for a tech brand aiming to boost sales. Emphasize the special offer to attract customers. The tone should be engaging and action-driven. The copy should be short, compelling, and include a strong CTA encouraging users to make a purchase.",
        defaultQuestion:
          "write me a comprehensive paragraph on , and the type is , of , length",
      },
      {
        id: 2,
        icon: iconMap.GiClick,
        name: "Keyword and Audience Genrate",
        description: `🔥 Boost Your SEO & Ads with High-Performing Keywords!`,
        questions: [
          {
            que: "Which platform do you need Keywords for?",
            required: true,
            placeholder:
              "e.g., Facebook, Google Ads,LinkedIn, YouTube, Amazon...",
          },
          {
            que: "Business or Niche Information for keywords.",
            required: true,
            placeholder: "e.g., Clothing, Tech, Real Estate, Fitness, etc.",
          },
          {
            que: "Keywords Type.",
            required: true,
            placeholder:
              "(e.g., short-tail: ladies shoes vs long-tail: best ladies running shoes)",
          },
        ],
        prompt:
          "Generate a list of relevant keywords. Focus on high-ranking, trending, and low-competition keywords. Provide the keywords in a structured format. Consider the following:",
        defaultQuestion:
          "write me a comprehensive paragraph on , and the type is , of , length",
      },
      {
        id: 3,
        icon: iconMap.GiClick,
        name: "Clickbait Titles",
        description: "Create a creative clickbait titles for your products",
        questions: [
          {
            que: "What is your product/service, and what key features do you want to highlight?",
            required: true,
            placeholder: "Enter your product description here...",
          },
          {
            que: "Who is your target audience?",
            required: true,
            placeholder: "e.g., Age, Gender, Interests, Location...",
          },
          {
            que: "Do you have any special offers, discounts, or urgency to include?",
            required: true,
            placeholder: "e.g., 50% off, Free Delivery, Cash on Delivery, etc.",
          },
        ],
        prompt:
          "Create 5-10 persuasive and attention-grabbing clickbait titles. The target audience is [age, gender, interests, location]. The titles will be used for [ads/social media/website]. Highlight key features. The tone should be [fun, emotional, shocking, urgent, curiosity-driven, etc.]. Ensure the titles are short, compelling, and encourage action",
        defaultQuestion:
          "write me a comprehensive paragraph on , and the type is , of , length",
      },
      {
        id: 4,
        icon: iconMap.GiClick,
        name: "Ad Headlines",
        description: "Write an attention grabbing ad headlines",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. VR, Oculus",
          },
          {
            que: "Audience",

            required: false,
            placeholder: "e.g. Women, Aliens",
          },
          {
            que: "Product Description",

            required: true,
            placeholder:
              "e.g. VR is an innovative device that can allow you to be part of virtual world",
          },
        ],
        prompt: "Write an attention grabbing ad headlines",
        defaultQuestion:
          "Write me a great youtube video description about , .The key points are , The resources that could be useful: , ",
      },
    ],
  },
  {
    id: 2,
    category: "Blogs",
    allcontents: [
      {
        id: 1,
        icon: iconMap.MdTitle,
        name: "Blog Ideas & Outlines",
        description:
          "Nobody wants to read boring blog titles. Generate catchy blog titles with this tool.",
        questions: [
          {
            que: "What is the main topic of your blog?",
            required: true,
            placeholder:
              "E.g., Technology, Health, Business, Finance, Travel, etc.",
          },
          {
            que: "Describe your idea.",
            required: true,
            placeholder:
              "E.g., A blog about the latest technology trends, healthy lifestyle tips, etc.",
          },
          {
            que: "Who is your target audience?",
            required: true,
            placeholder:
              "E.g., Beginners, professionals, businesses, students, etc.",
          },
        ],
        prompt:
          "Suggest 5 blog ideas and create a detailed outline for a blog with 10 SEO-friendly headings.",
        defaultQuestion:
          "Generate unique names about , and brand image should be . Following are the requirements: , ",
      },
      {
        id: 2,
        icon: iconMap.MdTitle,
        name: "Blog Section Writing",
        description:
          "Craft compelling, well-structured, and engaging blog sections effortlessly!",
        questions: [
          {
            que: "What is the main topic of your blog?",
            required: true,
            placeholder:
              "E.g., Technology, Health, Business, Finance, Travel, etc.",
          },
          {
            que: "What specific niche or sub-topic will your blog focus on?",
            required: true,
            placeholder:
              "E.g., Artificial Intelligence in Healthcare or Freelancing Tips for Beginners",
          },
          {
            que: "Who is your target audience for this blog?",
            required: true,
            placeholder:
              "E.g., Beginners, Professionals, Students, Businesses, etc.",
          },
          {
            que: "Do you want to include any specific keywords for SEO purposes?",
            required: true,
            placeholder:
              "E.g., Best AI tools in 2024, How to start freelancing, etc.",
          },
          {
            que: "Would you like to include any specific examples, statistics, or case studies?",
            required: false,
            placeholder: "If yes, please provide details.",
          },
        ],
        prompt:
          "Write a detailed blog post for the specified target audience. Use relevant keywords for SEO optimization. End with a strong Call-to-Action (CTA). Ensure the content is engaging, informative, and plagiarism-free.",
        defaultQuestion:
          "Generate unique blog topic ideas and a brand image based on the following requirements: , .",
      },
      {
        id: 3,
        icon: iconMap.MdTitle,
        name: "Blog Rewriting & Improvement",
        description:
          "Rephrase or enhance existing blogs for better readability and engagement.",
        questions: [
          {
            que: "Enter your content.",
            required: true,
            placeholder: "Enter your blog content here...",
          },
        ],
        prompt:
          "Rewrite the following content to improve readability, engagement, and clarity while keeping the original meaning intact.",
        defaultQuestion:
          "Provide a blog topic and key points you want to in the content.",
      },
      {
        id: 4,
        icon: iconMap.MdTitle,
        name: "Fact-Checking & Research Assistance",
        description:
          "Provide accurate information and credible sources for your article.",
        questions: [
          {
            que: "Which specific claims or facts do you want to verify?",
            required: true,
            placeholder: "Enter the statements or data you need fact-checked.",
          },
          {
            que: "Do you need sources from specific types of publications?",
            required: true,
            placeholder:
              "E.g., Scientific journals, Government websites, News articles, etc.",
          },
          {
            que: "Do you have any preferred reference sources?",
            required: true,
            placeholder: "E.g., Harvard Business Review, WHO, Forbes, etc.",
          },
        ],
        prompt:
          "Fact-check the following content and provide accurate information with credible sources. Ensure that the data is up-to-date and referenced from reliable sources like scientific journals, government reports, or reputable news websites. Also, include relevant statistics or if available",
        defaultQuestion:
          "Provide a blog topic and key points you want to in the content.",
      },
    ],
  },
  {
    id: 3,
    category: "Contents",
    allcontents: [
      {
        id: 1,
        icon: iconMap.FaFileAlt,
        name: "Article Generator",
        description:
          "Turn a title and outline text into a fully complete high quality article within seconds",
        questions: [
          {
            que: "Article Title",
            required: true,
            placeholder:
              "E.g., The Future of Artificial Intelligence in Healthcare",
          },
          {
            que: "Provide a detailed outline for your article. ",
            required: true,
            placeholder:
              "E.g., Introduction, Benefits, Challenges, Future Trends, Conclusion",
          },
          {
            que: "Who is your target audience? ",
            required: true,
            placeholder:
              "E.g., General Readers, Professionals, Students, Researchers",
          },
          {
            que: "Should the article include examples, statistics, or case studies? ",
            required: true,
            placeholder:
              " E.g., Yes, include real-world examples and statistics",
          },
        ],
        prompt:
          "Write a high-quality, fully structured article based on the given title and outline. Maintain the required tone and target audience. If SEO optimization is needed, incorporate the provided keywords naturally. Ensure the content is engaging, informative, and plagiarism-free. Include examples or statistics if specified. End with a strong conclusion.",
        defaultQuestion:
          "Write me an artist statement.The name of the artist, background and motivation of the art are , .the type of art I create is , .My creative precess is , .My goals as an artist are , .Specific theme or concept that I explore in my work are , .My preferred materials and techniques are , .Exhibitions or shows I have participated in are , ",
      },
      {
        id: 2,
        icon: iconMap.FaFileAlt,
        name: "Content Rewriter",
        description:
          "Take a piece of content and rewrite it to make it more interesting, creative, and engaging",
        questions: [
          {
            que: "What would you like to rewrite?",
            required: true,
            placeholder: "Paste your article, blog, or any text here...",
          },
          {
            que: "Do you want any additional modifications?",
            required: true,
            placeholder:
              "E.g., Make it shorter, Expand it with more details, Add examples, Keep it concise, etc.",
          },
        ],
        prompt:
          "Rewrite the following content to make it more interesting, creative, and engaging while maintaining the original meaning. Adjust the tone as specified by the user and optimize it for the intended audience. If applicable, incorporate SEO-friendly keywords and improve readability for better engagement. Ensure clarity, coherence, and a natural flow in the writing.",
        defaultQuestion:
          "Outline a general grant proposal about , .Organisation name is , .Project director name is , ",
      },
      {
        id: 3,
        icon: iconMap.FaFileAlt,
        name: "Paragraph Generator",
        description:
          "Generate paragraphs about any topic including a keyword and in a specific tone of voice",
        questions: [
          {
            que: "What is the topic of your content?",
            required: true,
            placeholder:
              "E.g., Artificial Intelligence, Healthy Eating, Digital Marketing, etc.",
          },
          {
            que: "What keyword(s) should be included?",

            required: false,
            placeholder:
              "E.g., AI in business, loss tips, SEO strategies, etc.",
          },
        ],
        prompt:
          "Write a well-structured paragraph on the given topic while naturally incorporating the provided keyword(s). Maintain the specified tone and ensure the content is engaging, relevant, and tailored to the target audience. Adjust the length as needed and include any additional modifications requested.",
        defaultQuestion:
          "Outline me press release.Name of exhibition is , .Artists involved are , .data and location is , .Theme is , .Features are , .Relevant quotes are , .Target audience is , ",
      },
      {
        id: 4,
        icon: iconMap.FaFileAlt,
        name: "Paragraph Generator",
        description:
          "Write short, simple and informative points for the subheadings of your article",
        questions: [
          {
            que: "Article Title",

            required: true,
            placeholder: "e.g. 10 ways to create websites",
          },
          {
            que: "Subheading Description",
            required: true,
            placeholder: "e.g. Why you should create a website",
          },
        ],
        prompt:
          "Generate short, simple, and informative points for each of the given subheadings in an article about. Ensure the points are easy to understand. If specified, include additional details such as statistics, examples, or key ",
        defaultQuestion:
          "Outline artists commission statement. Name and contact information is , .name of the commissioner and contact information is , .details about the artwork is , .compensation , .and ownership is , .T&C are , .",
      },
      {
        id: 5,
        icon: iconMap.FaFileAlt,
        name: "Pros & Cons Analysis",
        description:
          "Evaluate the advantages and disadvantages of a product, service, or concept for your blog or research.",
        questions: [
          {
            que: "What is the name of the product, service, or concept?",

            required: true,
            placeholder: "e.g., iPhone 15, Cloud Computing, Electric Vehicles",
          },

          {
            que: "Do you have specific criteria for evaluation?",

            required: false,
            placeholder: "e.g., Performance, Pricing, Usability, Security",
          },
        ],

        prompt:
          "Write a well-structured pros and cons analysis of '[User's Topic]'. Provide clear, concise points explaining the benefits and drawbacks. Ensure the content is informative, balanced, and useful for decision-making.",

        defaultQuestion:
          "Analyze the pros and cons of '[User's Topic]'. Focus on key features, benefits, and limitations, ensuring a neutral and perspective.",
      },
      {
        id: 6,
        icon: iconMap.FaFileAlt,
        name: "Summarize Text",
        description:
          "Generate concise, high-quality summaries while retaining key details and ",
        questions: [
          {
            que: "What content do you want to summarize?",
            required: true,
            placeholder: "Enter your text or URL to summarize...",
          },
          {
            que: "What is the purpose of this summary?",
            required: false,
            placeholder:
              "e.g., Academic, Business Report, Blog Post, News, Personal Use",
          },
        ],
        prompt:
          "Create a detailed product description while maintaining key details, clarity, and coherence. Focus on providing an engaging and informative overview ",
      },
      {
        id: 7,
        icon: iconMap.FaFileAlt,
        name: "Product Description",
        description:
          "Create compelling, persuasive, and SEO-optimized product descriptions to engage your audience.",
        questions: [
          {
            que: "What is the product name?",

            required: true,
            placeholder: "e.g., Oculus Quest, Smart Thermostat",
          },
          {
            que: "Who is the target audience?",

            required: false,
            placeholder: "e.g., Gamers, Homeowners, Tech Enthusiasts",
          },
          {
            que: "Describe the product in detail.",

            required: true,
            placeholder:
              "e.g., A wireless VR headset with high-resolution displays and hand tracking.",
          },
          {
            que: "Any specific keywords to include?",

            required: false,
            placeholder: "e.g., Virtual Reality, Immersive Gaming, AI-powered",
          },
        ],

        prompt:
          "Write a product description for '[User's Product]' that focuses only on key features and unique selling points without any summary or conclusion. The content should include '[Specific Keywords]'. Avoid any closing statements or persuasive conclusions.",
      },
      {
        id: 8,
        icon: iconMap.FaFileAlt,
        name: "Startup Name Generator",
        description:
          "Generate innovative, unique, and brandable names for your startup instantly.",
        questions: [
          {
            que: "What is your startup about?",
            required: true,
            placeholder:
              "Describe your startup's industry, purpose, and key focus.",
          },
          {
            que: "Any specific words or themes to include?",
            required: false,
            placeholder: "e.g., Tech, Green Energy, AI, Fashion, Finance",
          },

          {
            que: "Should the name be short and easy to pronounce?",
            required: false,
            placeholder: "Yes or No",
          },
        ],

        prompt:
          "Generate a list of unique and brandable startup names based on the following criteria: Industry: '[User's Industry]', Keywords: '[User's Keywords]', Preferred Tone: '[User's Tone]'. Ensure the names are catchy, easy to remember, and relevant to the business's purpose.",
      },
      {
        id: 9,
        icon: iconMap.FaFileAlt,
        name: "Resume Builder",
        description: "Create a professional and ATS-friendly resume instantly.",
        questions: [
          {
            que: "What is your full name?",
            required: true,
            placeholder: "Enter your full name",
          },
          {
            que: "What is your job title or career objective?",
            required: true,
            placeholder: "e.g., Software Engineer, Marketing Manager",
          },
          {
            que: "List your skills (comma separated)",
            required: true,
            placeholder: "e.g., React.js, Node.js, SEO, Team Management",
          },
          {
            que: "Describe your work experience",
            required: true,
            placeholder: "Include job roles, company names, and achievements",
          },
          {
            que: "Educational Background",
            required: true,
            placeholder: "Degree, Institution, Graduation Year",
          },
        ],
        prompt:
          "Generate a professional resume based on the following details: Name: '[User's Name]', Job Title: '[User's Job Title]', Skills: '[User's Skills]', Work Experience: '[User's Experience]', Education: '[User's Education]'. Ensure the resume is ATS-friendly and formatted professionally.",
      },
      {
        id: 10,
        icon: iconMap.FaEnvelopeOpenText,
        name: "Cold Email Generator",
        description:
          "Create compelling cold emails for networking, sales, or job applications.",
        questions: [
          {
            que: "Who is the recipient?",
            required: true,
            placeholder: "e.g., Hiring Manager, CEO, Marketing Team",
          },
          {
            que: "What is the purpose of the email?",
            required: true,
            placeholder:
              "e.g., Job Application, Business Proposal, Sales Pitch",
          },
          {
            que: "Key points to include?",
            required: true,
            placeholder: "your main message or offer",
          },
          {
            que: "Preferred tone of email?",
            required: false,
            placeholder: "e.g., Formal, Friendly, Persuasive",
          },
        ],
        prompt:
          "Write a cold email targeted at '[User's Recipient]' for '[User's Purpose]'. Include the following key points: '[User's Key Points]'. The tone should be '[User's Tone]'. Ensure the email is concise, engaging, and effective.",
      },
      {
        id: 11,
        icon: iconMap.FaFileAlt,
        name: "Presentation Slide Generator",
        description:
          "Generate professional presentation slides based on your content.",
        questions: [
          {
            que: "What is the topic of the presentation?",
            required: true,
            placeholder: "e.g., Digital Marketing Strategies",
          },
          {
            que: "Key points to include?",
            required: true,
            placeholder: "List the main points or sections",
          },
          {
            que: "Preferred slide format/style?",
            required: false,
            placeholder: "e.g., Minimalist, Corporate, Infographic",
          },
        ],
        prompt:
          "Create a presentation on '[User's Topic]'. The slides should include the following key points: '[User's Key Points]'. The preferred style is '[User's Style]'. Ensure the slides are visually appealing and well-structured.",
      },
    ],
  },
  {
    id: 4,
    category: "Ecommerce",
    allcontents: [
      {
        id: 1,
        icon: iconMap.FaAmazon,
        name: "Amazon Product Description",
        description: "Create attention grabbing amazon product description",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. baby toys",
          },
          {
            que: "Focus Keywords (comma seperated)",

            required: true,
            placeholder: "e.g. soft, cotton, girl",
          },
        ],
        prompt:
          "Create an Amazon product description that is attention-grabbing, SEO-friendly, and the key features of the product. Include the focus keywords in a natural and effective way to attract potential buyers.",
        defaultQuestion:
          "Draft me personalized birthday wish.The name of the person is , .My relationship with the person is , .The tone of the message is  , .Moments i have shared with that person are , ",
      },
      {
        id: 2,
        icon: iconMap.FaAmazon,
        name: "Product Benefits",
        description: "List the product benefits using advanced tools.",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. Smart phone",
          },
          {
            que: "Product Description",

            required: false,
            placeholder: "Describe your product...",
          },
        ],
        prompt:
          "List the key benefits of your product based on its name and description. the unique features and advantages that will attract potential buyers.",

        defaultQuestion:
          "Craft me an apology that expresses my regret.The reason is , .The impact of the actions or behavior on the other person on party involved are , .The tone is , .Details are , .",
      },
      {
        id: 3,
        icon: iconMap.FaAmazon,
        name: "Selling Product Titles",
        description:
          "Find out selling product titles for your product description",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. Baby Toys",
          },
          {
            que: "Product Description",

            required: false,
            placeholder: "Describe your product...",
          },
        ],
        prompt:
          "Generate compelling and high-converting product titles based on the given product name and description. Ensure the titles are engaging, SEO-friendly, and attract potential buyers.",
        defaultQuestion:
          "Provide me with an appropriate marriage invitation message. The names of the bride and groom are [Name1] and [Name2]. The date, time, and location of the wedding are [Date, Time, Location]. The tone of the message is [Formal/Casual].",
      },
      {
        id: 4,
        icon: iconMap.FaAmazon,
        name: "Product Comparisons",
        description:
          "Create a comprehensive comparison of two products between each other",
        questions: [
          {
            que: "Products to Compare",
            required: true,
            placeholder: "iPhone vs Samsung",
          },
        ],
        prompt:
          "Create a detailed and comparison between the given products, their key features, pros and cons, pricing, and suitability for different users. Provide an objective and well-structured analysis.",
        defaultQuestion:
          "Provide me with a personalized speech.The topic or subject of the speech is , .The tone of the speech is , .The audience is , .The purpose is , .",
      },
      {
        id: 5,
        icon: iconMap.FaAmazon,
        name: "Product Characteristics",
        description: "Write a full product characteristics",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "Enter your product name here...",
          },
          {
            que: "Focus Keywords (comma seperated)",

            required: false,
            placeholder: "e.g. soft, cotton, girl",
          },
        ],
        prompt:
          "Generate a detailed overview of the product's characteristics, including its key features, specifications, and unique selling points. Incorporate the provided focus keywords to enhance clarity and SEO optimization.",
        defaultQuestion:
          "Write me a personalized resume.My personal details are , .My career objective is , .My educational background is , .My work experience is , .skills and abilities are , .",
      },
      {
        id: 6,
        icon: iconMap.FaAmazon,
        name: "Amazon Product Features",
        description:
          "Advantages and features of your products that will make them irresistable for shoppers",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. VR, Oculus",
          },
          {
            que: "Audience",

            required: false,
            placeholder: "e.g. soft, cotton, girl",
          },
          {
            que: "Product Description",

            required: true,
            placeholder:
              "e.g. VR is an innovative device that can allow you to be part of virtual world",
          },
        ],
        prompt:
          "List the most compelling features and advantages of the given product, ensuring they are tailored for an Amazon product listing. Focus on benefits that make the product irresistible to shoppers, using clear and persuasive language.",
        defaultQuestion:
          "Write me a personalized cover letter,My personal details are , .My company name and job title are , .My company background is , .My work exprience is , .My skills and abilities are , .",
      },
    ],
  },
  {
    id: 5,
    category: "Emails",
    allcontents: [
      {
        id: 1,
        icon: iconMap.FaEnvelopeOpenText,
        name: "Welcome Email",
        description:
          "Create engaging and impactful welcome emails for your customers.",
        questions: [
          {
            que: "Your Company/Product Name",
            required: true,
            placeholder: "e.g., Creative Minds",
          },
          {
            que: "Target Audience (e.g., new customers, VIP clients)",
            required: true,
            placeholder: "e.g., Women, Business Owners",
          },
          {
            que: "What message or tone should the email convey?",
            required: true,
            placeholder: "Warm, professional, exciting, etc.",
          },
          {
            que: "Any special offers or CTA you want to include?",
            required: false,
            placeholder: "Discount code, free resource, etc.",
          },
        ],
        prompt:
          "Write a warm and engaging welcome email for {company_name}, targeting {target_audience}. The email should have a {tone} tone and {special_offer}. Include a friendly call-to-action encouraging engagement.",
        defaultQuestion:
          "Create a highly engaging and personalized welcome email. The company name is , . The target audience is , . The tone of the email should be , . The email should include , . The goal is to , .",
      },
      {
        id: 2,
        icon: iconMap.FaEnvelopeOpenText,
        name: "Cold Email",
        description: "Generate high-converting cold emails with AI.",
        questions: [
          {
            que: "Company/Product Name",
            required: true,
            placeholder: "e.g., Creative Minds",
          },
          {
            que: "Who is your ideal recipient?",
            required: true,
            placeholder: "e.g., CEO, Small Business Owners",
          },
          {
            que: "What is the main value proposition?",
            required: true,
            placeholder: "Why should they care?",
          },
          {
            que: "What is your call-to-action?",
            required: false,
            placeholder: "Schedule a call, Sign up, etc.",
          },
        ],
        prompt:
          "Write a compelling cold email for {company_name}, addressing {recipient}. the key value: {value_proposition}. The email should have a {tone} tone and end with a clear CTA: {call_to_action}.",
        defaultQuestion:
          "Write a compelling cold email that grabs attention and gets responses. The company name is , . The target recipient is , . The main value we offer is , . The email should sound , . The CTA should encourage them to , .",
      },
      {
        id: 3,
        icon: iconMap.FaEnvelopeOpenText,
        name: "Follow-Up Email",
        description:
          "Keep the conversation going with a well-structured follow-up email.",
        questions: [
          {
            que: "Your Company/Product Name",
            required: true,
            placeholder: "e.g., Creative Minds",
          },
          {
            que: "Who are you following up with?",
            required: true,
            placeholder: "e.g., A lead, A job recruiter",
          },
          {
            que: "What was the last interaction?",
            required: true,
            placeholder: "e.g., Sent proposal, previous meeting",
          },
          {
            que: "What action do you want them to take?",
            required: false,
            placeholder: "e.g., Reply, Schedule a meeting",
          },
        ],
        prompt:
          "Write a strategic follow-up email for {company_name} to {recipient}. The last interaction was {last_interaction}. The tone should be {tone}, and the goal is to {desired_action}.",
        defaultQuestion:
          "Write a strategic follow-up email that maintains interest and encourages action. The recipient is , . The last interaction was , . The tone of the email should be , . The goal is to , .",
      },
      {
        id: 4,
        icon: iconMap.FaEnvelopeOpenText,
        name: "Email Subject Lines",
        description:
          "Generate attention-grabbing subject lines that increase email open rates.",
        questions: [
          {
            que: "What is your email about?",
            required: true,
            placeholder: "Explain the purpose of your email...",
          },
          {
            que: "What is the key emotion or reaction you want?",
            required: false,
            placeholder: "e.g., Curiosity, Urgency",
          },
        ],
        prompt:
          "Generate 5 high-converting subject lines for an email about {email_purpose}. The tone should evoke {emotion}. The goal is to maximize open rates.",
        defaultQuestion:
          "Generate 5 high-converting subject lines that are catchy, compelling, and relevant. The email is about , . The emotion I want to evoke is , . The goal is to , .",
      },
    ],
  },
  {
    id: 6,
    category: "Frameworks",
    allcontents: [
      {
        id: 1,
        icon: iconMap.FaPenNib,
        name: "Problem-Agitate-Solution (PAS) Framework",
        description:
          "Generate one of the most effective copywriting formulas for your business",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. VR, Oculus",
          },
          {
            que: "Audience",

            required: true,
            placeholder: "e.g. Women, Aliens",
          },
          {
            que: "Product Description",

            required: true,
            placeholder:
              "e.g. VR is an innovative device that can allow you to be part of the virtual world",
          },
        ],
        prompt:
          "Create a compelling PAS framework for a product. the problem, agitate the issue, and present a convincing solution. Keep the tone persuasive and engaging.",
        defaultQuestion:
          "Provide me with an amazing food recipe. I am looking to make a , .The style of dish I am interested in is , .I am following food allergies: , .I have access to , .The Ingredients I want are , .",
      },
      {
        id: 2,
        icon: iconMap.FaPenNib,
        name: "Attention-Interest-Desire-Action (AIDA) Framework",
        description:
          "AIDA model will help you ensure that any kind of writing is as effective as possible",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "Enter your product name here...",
          },
          {
            que: "Product Description",

            required: true,
            placeholder: "Enter more details here",
          },
        ],
        prompt:
          "Write an AIDA-based advertisement for a fitness supplement. Capture attention, build interest, create desire, and end with a strong CTA to drive sales.",
        defaultQuestion:
          "Provide general guidance on a personalized diet plan. My current health status is , .Dietary restrictions and allergies are , .I want to , ",
      },
      {
        id: 3,
        icon: iconMap.FaPenNib,
        name: "Before–After–Bridge (BAB) Framework",
        description:
          "Conversion-oriented formula designed to make a particular offer more appealing",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "Enter your product name here...",
          },
          {
            que: "Product Description",

            required: true,
            placeholder: "Enter more details here",
          },
        ],
        prompt:
          "Create a BAB framework for a skincare brand. Describe the problem before, the desired transformation after, and bridge the gap with a compelling solution.",
        defaultQuestion:
          "Write me a great food blog post. Blog should be about , .My target audience is , .Topics I want to cover in post are , ",
      },
      {
        id: 4,
        icon: iconMap.FaPenNib,
        name: "Promise–Picture–Proof–Push (PPPP) Framework",
        description:
          "Use the 4P formula to craft persuasive content that moves readers to action",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "Enter your product name here...",
          },
          {
            que: "Product Description",

            required: true,
            placeholder: "Enter more details here",
          },
        ],
        prompt:
          "Use the PPPP framework to craft a persuasive marketing copy for a loss product. the promise, paint a compelling picture, provide proof, and push for action.",
        defaultQuestion:
          "Interpret the nutrition facts. Name of the product is , .The serving size is , .Amount of energy provided by one serving of the food is , .Amount of fiber is , .Amount of sugar is , .Amount of vitamins and minerals is , .The percentage of daily recommended intake of nutrients that are provided by one serving of the food is , ",
      },
    ],
  },
  {
    id: 7,
    category: "Marketing",
    allcontents: [
      {
        id: 1,
        icon: iconMap.TbBrandBeats,
        name: "Company Press Release",
        description: "Write a company press release with the help of AI",
        questions: [
          {
            que: "Company Name",
            required: true,
            placeholder: "Enter your company name...",
          },
          {
            que: "Company Description",
            required: true,
            placeholder: "Provide company information..",
          },
        ],
        defaultQuestion:
          "Write a company press release. The company name is , .The company description is , .The key to include are , .",
        prompt:
          "Generate a professional and engaging company press release that key features and achievements.",
      },
      {
        id: 2,
        icon: iconMap.TbBrandBeats,
        name: "Brand/Product Press Release",
        description:
          "Write a brand or product press release with the help of AI",
        questions: [
          {
            que: "Product Name",
            required: true,
            placeholder: "Enter your product name...",
          },
          {
            que: "Product Description",
            required: true,
            placeholder: "Describe your product..",
          },
        ],
        defaultQuestion:
          "Write a brand/product press release. The product name is , .The product description is , .The key features to are , .",
        prompt:
          "Create a persuasive and newsworthy press release for a product launch or brand announcement.",
      },
      {
        id: 3,
        icon: iconMap.TbBrandBeats,
        name: "Brand Names",
        description: "Generate unique brand names with the help of AI",
        questions: [
          {
            que: "Product Description",

            required: true,
            placeholder: "Describe your product..",
          },
        ],
        defaultQuestion:
          "Generate a unique brand name. The product description is , .The target audience is , .The style of name I prefer is , .",
        prompt:
          "Suggest unique, creative, and memorable 10 brand names based on product description ",
      },
    ],
  },
  {
    id: 8,
    category: "Social Media",
    allcontents: [
      {
        id: 1,
        icon: iconMap.FaFacebook,
        name: "Facebook Ads Mastery",
        description:
          "Write Facebook ads that engage your audience and deliver a high conversion rate",
        questions: [
          {
            que: "Product Name",
            required: true,
            placeholder: "e.g. VR, Oculus",
          },
          {
            que: "Audience",
            required: true,
            placeholder: "e.g. Women, Tech Enthusiasts",
          },
          {
            que: "Product Description",
            required: true,
            placeholder:
              "e.g. VR is a **game-changing** technology that lets users experience an entire virtual world",
          },
        ],
        defaultQuestion:
          "Create a Facebook ad. The product name is , . The target audience is , . The product description is , .",
        prompt:
          "Craft a **high-converting**, **attention-grabbing** Facebook ad that will ignite interest, generate action, and deliver **exceptional results** for the user's product.",
      },
      {
        id: 2,
        icon: iconMap.FaInstagram,
        name: "Instagram Caption Mastery",
        description:
          "Grab attention with catchy captions for your Instagram posts",
        questions: [
          {
            que: "What is your Instagram post about?",
            required: true,
            placeholder: "e.g. start earning money online, fitness journey",
          },
        ],
        defaultQuestion:
          "Write an Instagram caption about , . The message I want to convey is , .",
        prompt:
          "Craft an **irresistible**, **eye-catching** Instagram caption that will **hook** your followers and **boost engagement**.",
      },
      {
        id: 3,
        icon: iconMap.FaInstagram,
        name: "Instagram Mastery",
        description: "Find the best to use for your Instagram posts",
        questions: [
          {
            que: "Enter a Keyword",
            required: true,
            placeholder: "e.g. makeup, fitness, travel",
          },
        ],
        defaultQuestion: "Suggest the best Instagram for the keyword , .",
        prompt:
          "Generate **high-converting**, **viral-ready** Instagram that will dramatically increase your post's visibility and engagement.",
      },
      {
        id: 4,
        icon: iconMap.AiTwotoneLike,
        name: "Personal Social Media Post Mastery",
        description:
          "Write a social media post for yourself to be published on any platform",
        questions: [
          {
            que: "What is this post about?",
            required: true,
            placeholder: "e.g. I achieved fluency in Spanish in just one week",
          },
        ],
        defaultQuestion:
          "Write a personal social media post about , . The message I want to convey is , .",
        prompt:
          "Create a **highly engaging** personal social media post that will **spark conversation** and resonate deeply with your audience.",
      },
      {
        id: 5,
        icon: iconMap.AiTwotoneLike,
        name: "Business Social Media Post Mastery",
        description:
          "Write a post for your business to be published on any social media platform",
        questions: [
          {
            que: "Company Name",
            required: true,
            placeholder: "e.g. Amazon, Google",
          },
          {
            que: "Company Description",
            required: true,
            placeholder: "e.g. Amazon is a **market leader** in e-commerce",
          },
          {
            que: "What is this post about?",
            required: true,
            placeholder: "e.g. New product launch, Special discount offer",
          },
        ],
        defaultQuestion:
          "Create a business social media post. The company name is , . The company description is , . The post topic is , .",
        prompt:
          "Generate an **engaging**, **brand-boosting** social media post that will attract attention, elevate your business, and **drive customer action**.",
      },
      {
        id: 6,
        icon: iconMap.FaFacebook,
        name: "Facebook Ad Headline Mastery",
        description:
          "Write catchy and convincing headlines to make your Facebook Ads stand out",
        questions: [
          {
            que: "Product Name",
            required: true,
            placeholder: "e.g. VR, Oculus",
          },
          {
            que: "Audience",
            required: true,
            placeholder: "e.g. Women, Tech Enthusiasts",
          },
          {
            que: "Product Description",
            required: true,
            placeholder:
              "e.g. VR is an **innovative** device that immerses users in a **virtual world**",
          },
        ],
        defaultQuestion:
          "Create a Facebook ad headline. The product name is , . The target audience is , . The product description is , .",
        prompt:
          "Write a **compelling**, **high-converting** Facebook ad headline that will **maximize clicks** and drive high engagement.",
      },
      {
        id: 7,
        icon: iconMap.FaGoogle,
        name: "Google Ad Headline Mastery",
        description:
          "Write catchy 30-character headlines to promote your product with Google Ads",
        questions: [
          {
            que: "Product Name",
            required: true,
            placeholder: "e.g. VR, Oculus",
          },
          {
            que: "Audience",
            required: true,
            placeholder: "e.g. Women, Tech Enthusiasts",
          },
          {
            que: "Product Description",
            required: true,
            placeholder:
              "e.g. VR is an **innovative** device that offers a **next-level** virtual experience",
          },
        ],
        defaultQuestion:
          "Create a Google ad headline. The product name is , . The target audience is , . The product description is , .",
        prompt:
          "Generate **high-converting**, **attention-grabbing** Google Ad headlines that will immediately **boost your ad performance**.",
      },
    ],
  },
  {
    id: 9,
    category: "Video",
    allcontents: [
      {
        id: 1,
        icon: iconMap.FaYoutube,
        name: "Video Descriptions",
        description:
          "Write compelling YouTube descriptions to get people interested in your video",
        questions: [
          {
            que: "What is the title of your video?",
            required: true,
            placeholder: "e.g. start earning money online",
          },
        ],
        defaultQuestion: "Share some hearted joke about , .",
        prompt: "Generate an engaging YouTube video description.",
      },
      {
        id: 2,
        icon: iconMap.FaYoutube,
        name: "Video Titles",
        description:
          "Compelling YouTube video title to catch everyone's attention",
        questions: [
          {
            que: "What is your video about?",
            required: true,
            placeholder:
              "Provide description of your video, provide as many details as possible...",
          },
        ],
        defaultQuestion: "Sing me a song about , .",
        prompt: "Generate a catchy and compelling YouTube video title.",
      },
      {
        id: 3,
        icon: iconMap.FaYoutube,
        name: "YouTube Tags Generator",
        description:
          "Generate SEO-optimized YouTube tags/keywords for your video",
        questions: [
          {
            que: "Enter your video title with keywords",
            required: true,
            placeholder: "e.g. start earning money online",
          },
        ],
        defaultQuestion:
          "Do a role play for me. The scenario is , .I want you to be , in this scenario. I would like to be , in this scenario.",
        prompt: "Generate the best SEO-friendly YouTube tags for your video.",
      },
      {
        id: 4,
        icon: iconMap.MdOutlineSubscriptions,
        name: "Video Scripts",
        description:
          "Quickly create scripts for your videos and start shooting",
        questions: [
          {
            que: "What is your video about?",
            required: true,
            placeholder:
              "Provide description of what your video is about, provide all details",
          },
        ],
        defaultQuestion:
          "Dear user, I can help you with meditation exercises to help alleviate your anxiety, reduce blood pressure, and pain. My current experience level with meditation , . My preferred style of meditation is , . Physical limitations or health conditions are , .",
        prompt: "Generate a well-structured script for your video.",
      },
      {
        id: 5,
        icon: iconMap.FaTiktok,
        name: "TikTok Video Scripts",
        description:
          "Video scripts that are ready to shoot and will make you go viral",
        questions: [
          {
            que: "Video Description",
            required: true,
            placeholder: "Describe your TikTok video...",
          },
        ],
        defaultQuestion:
          "Help better my language. My language is , . The level I am at is , . The areas I would like to focus on are , .",
        prompt: "Create a viral TikTok video script.",
      },
    ],
  },
  {
    id: 10,
    category: "Websites",
    allcontents: [
      {
        id: 1,
        icon: iconMap.CgWebsite,
        name: "Meta Descriptions",
        description:
          "Write SEO-optimized meta descriptions based on a website description.",
        questions: [
          {
            que: "Website Name",
            required: true,
            placeholder: "e.g. Amazon, Google",
          },
          {
            que: "Website Description",
            required: true,
            placeholder: "Describe what your website or business...",
          },
        ],
        prompt:
          "Write an SEO-optimized meta description for the given website, ensuring it is compelling, concise, and includes relevant keywords to improve search rankings.",
        defaultQuestion: "Generate an SEO-friendly meta description for , .",
      },
      {
        id: 2,
        icon: iconMap.TbMessageChatbot,
        name: "FAQs",
        description:
          "Generate frequently asked questions based on your product description.",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. Baby Toys",
          },
          {
            que: "Product Description",

            required: true,
            placeholder: "Describe what your product or service does...",
          },
        ],
        prompt:
          "Generate a list of frequently asked questions (FAQs) based on the product description. Ensure the questions cover common customer concerns and key product features.",
        defaultQuestion: "Generate FAQs for , .",
      },
      {
        id: 3,
        icon: iconMap.TbMessageChatbot,
        name: "FAQ Answers",
        description: "Generate creative answers to FAQs about your business.",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. Baby Toys",
          },
          {
            que: "Question",
            required: true,
            placeholder: "e.g. How to use this product",
          },
          {
            que: "Product Description",

            required: true,
            placeholder: "Describe what your product or service does...",
          },
        ],
        prompt:
          "Provide a detailed and informative answer to the given frequently asked question (FAQ) related to the product. Ensure the response is clear, helpful, and engaging.",
        defaultQuestion: "Provide a detailed answer to the FAQ: , .",
      },
      {
        id: 4,
        icon: iconMap.TiStarHalfOutline,
        name: "Testimonials / Reviews",
        description:
          "Generate user testimonials to add social proof to your website.",
        questions: [
          {
            que: "Product Name",

            required: true,
            placeholder: "e.g. Baby Toys",
          },
          {
            que: "Product Description",

            required: true,
            placeholder: "Describe what your product or service does...",
          },
        ],
        prompt:
          "Generate a realistic and persuasive customer testimonial for the given product. the user's positive experience, benefits, and overall satisfaction.",
        defaultQuestion: "Write a customer testimonial for , .",
      },
      {
        id: 5,
        icon: iconMap.ImProfile,
        name: "Company Bio",
        description: "Write a comprehensive company bio based on your inputs.",
        questions: [
          { que: "Company Name", required: true, placeholder: "e.g. WebSoul" },
          {
            que: "Company Description",

            required: true,
            placeholder: "Describe your company, mission, and vision...",
          },
        ],
        prompt:
          "Write a compelling company bio that effectively showcases the company's mission, vision, and unique value proposition. Ensure it resonates with the target audience.",
        defaultQuestion: "Generate a company bio for , .",
      },
      {
        id: 6,
        icon: iconMap.CgWebsite,
        name: "Newsletter Generator",
        description: "Generate a newsletter based on the provided information.",
        questions: [
          {
            que: "Newsletter Topic",
            required: true,
            placeholder: "Describe what it should be about...",
          },
        ],
        defaultQuestion: "Generate a newsletter on , .",
        prompt:
          "Create an engaging and informative newsletter on the given topic. Ensure it captures attention, provides valuable content, and encourages readers to take action.",
      },
      {
        id: 7,
        icon: iconMap.MdOutlineNotificationsActive,
        name: "Blog Post Ideas",
        description: "Get creative blog post ideas based on your niche.",
        questions: [
          {
            que: "Topic/Niche",
            required: true,
            placeholder: "e.g. Fitness, Technology, Business",
          },
        ],
        defaultQuestion: "Suggest blog post ideas about , .",
        prompt:
          "Generate a list of creative and engaging blog post ideas based on the given topic or niche. Ensure the topics are relevant, unique, and valuable to the target audience.",
      },
      {
        id: 8,
        icon: iconMap.RiFilePaper2Line,
        name: "Social Media Captions",
        description: "Create engaging captions for your social media posts.",
        questions: [
          {
            que: "Platform",
            required: true,
            placeholder: "e.g. Instagram, Twitter",
          },
          {
            que: "Post Theme",
            required: true,
            placeholder: "Describe what your post is about...",
          },
        ],
        prompt:
          "Create a catchy and engaging social media caption tailored for the given platform and post theme. Ensure it aligns with the platform's style and encourages user interaction.",
        defaultQuestion: "Generate a social media caption for , .",
      },
    ],
  },
  {
    id: 11,
    category: "Other",
    allcontents: [
      {
        id: 1,
        icon: iconMap.GiLoveSong,
        name: "Song Lyrics",
        description:
          "Generate a song lyrics based on your description and keywords",
        questions: [
          {
            que: "Song Genre",
            required: true,
            placeholder: "Specify the genre (e.g., Pop, Rock, Hip-Hop)...",
          },
          {
            que: "Mood & Theme",
            required: true,
            placeholder: "Describe the mood (e.g., happy, sad, romantic)...",
          },
          {
            que: "Main Keywords",
            required: true,
            placeholder: "Enter important words or phrases for the lyrics...",
          },
        ],
        defaultQuestion:
          "Write a song lyrics in , genre with a , theme using keywords: , .",
        prompt:
          "Generate creative song lyrics in the specified genre and theme, incorporating the given keywords.",
      },
      {
        id: 2,
        icon: iconMap.MdOutlineNotificationsActive,
        name: "App and SMS Notifications",
        description:
          "Notification messages for your apps, websites and mobile devices that grabs users attention",
        questions: [
          {
            que: "Notification Type",
            required: true,
            placeholder: "e.g., Promotional, Alert, Reminder...",
          },
          {
            que: "Target Audience",
            required: true,
            placeholder: "Describe who will receive this notification...",
          },
          {
            que: "Key Message",
            required: true,
            placeholder: "Enter the main message of the notification...",
          },
        ],
        defaultQuestion:
          "Create an , notification for , audience with message: , .",
        prompt:
          "Generate an engaging and attention-grabbing notification message tailored to the given audience and purpose.",
      },
    ],
  },
];

export const categories = [
  {
    title: "All Templates",
    description:
      "Browse our complete collection of AI prompts across all categories",
  },
  {
    title: "Ads",
    description:
      "Prompts for creating compelling advertising copy and campaign content",
  },
  {
    title: "Blogs",
    description:
      "Templates for blog posts, articles, and long-form content creation",
  },
  {
    title: "Contents",
    description:
      "General content writing prompts for various purposes and formats",
  },
  {
    title: "Ecommerce",
    description:
      "Templates for product descriptions, listings, and online store content",
  },
  {
    title: "Emails",
    description:
      "Prompts for crafting engaging email campaigns and newsletters",
  },
  {
    title: "Frameworks",
    description:
      "Structured templates for creating systematic and organized content",
  },
  {
    title: "Marketing",
    description:
      "Templates for marketing materials, campaigns, and promotional content",
  },
  {
    title: "Social Media",
    description:
      "Prompts for creating engaging posts across various social platforms",
  },
  {
    title: "Video",
    description:
      "Templates for video scripts, descriptions, and related content",
  },
  {
    title: "Websites",
    description: "Prompts for website copy, landing pages, and web content",
  },
  {
    title: "Other",
    description:
      "Miscellaneous templates for specialized and unique content needs",
  },
];
