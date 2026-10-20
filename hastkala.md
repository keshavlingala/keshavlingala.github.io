# Hastkala: A Living Archive Of Indian Handicrafts

> A site for discovering Indian handicrafts and trying them at home, in English and Hindi: 36 crafts, 86 step-by-step activities and a quiz that suggests where to start.

- **Author:** Keshav Lingala (Senior Software Engineer) — https://keshav.codes
- **Published:** October 2026
- **Project page:** https://keshav.codes/hastkala/ (screenshots and diagrams are on that page)
- **Tech:** React, Typescript, Postgresql, Firebase, Github Actions, PWA, ComfyUI, Supabase, Vite, i18next, Gemini
- **Live demo:** https://hastkala-dev.web.app
- **Topics:** Indian handicrafts, Indian crafts, Craft archive, Living archive, Learning companion, Hobby finder quiz, DIY activities, Bilingual app, English and Hindi, React, TypeScript, Vite, Supabase, Postgres, Firebase Hosting, Pre-rendering, SEO, Accessibility, PWA, Serverless, Free tier, GitHub Actions, Keshav Lingala, Keshav Reddy, Keshav Reddy Lingala, Lingala Keshav Reddy, Keshav

---

Hastkala (हस्तकला, "handicraft") helps people discover Indian handicrafts and try them at home. You read about a craft, take a short quiz to find one that suits you, and follow a step-by-step activity to make something yourself.

- **Crafts.** 36 crafts with their history and how they're made, filterable by state, material and popularity.
- **Activities.** 86 projects you can do at home, filterable by skill, time, effort and budget.
- **Steps with pictures.** Each activity has steps, tips, a materials list with prices and buy links for India or the US, and videos.
- **Hobby Finder.** Seven quick questions, then three activities to start with.
- **English and Hindi.** Switch languages at any time.
- **Three themes.** Museum, folk and craft, each in light and dark.

## Team

- **Asritha Nagubandi, Poornima Chaturvedula and Jayneel**: subject matter experts. Idea, requirements, design direction and craft knowledge.
- **Keshav Lingala**: development. Architecture, features and infrastructure.

## Activities

*Figure: The activities page, with filters for skill, time, effort, complexity and budget*

*Figure: An activity page: the craft behind it, the materials with prices, and an India or US price toggle*

*Figure: A step with its tip and picture*

## Crafts

*Figure: A craft page for Bidriware*

## Languages And Themes

*Figure: The same activity in Hindi*

*Figure: An activity on a phone, in the folk theme's dark mode*

## How It's Built

It's a React and TypeScript app, with Supabase for the database, sign-in and storage, hosted on Firebase. Pages are prerendered, so they load fast and show up in search, and it runs on free tiers.

The craft and activity text was drafted with AI and is being reviewed by the experts, who edit it in the app's own admin console. Cover images and step pictures were generated with ComfyUI on [my home server](/homelab/) and are labelled as AI-generated on the site. Inspiration photos are credited where they appear.

## What's Next

Community posts, workshop booking and artisan profiles are built but hidden until they're ready to launch.

---

From the project archive of Keshav Lingala — https://keshav.codes. Machine-readable index: https://keshav.codes/llms.txt
