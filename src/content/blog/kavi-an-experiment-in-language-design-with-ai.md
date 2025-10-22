---
title: "Vibecoding Kavi: An experiment in Language Design with AI in 7 Days — Day 1"
description: "How I vibecoded Kavi: A modern pseudocode like language built in a week with AI"
publishDate: 2025-10-14
draft: false
tags: ["AI", "technology", "future"]
---

AI coding tools have become a game-changer for my development workflow, both at work and on personal projects. The work that usually takes several hours of meticulous coding can now be done in a few minutes with a properly crafted prompt.

But let's be honest: most of the work that we do on a regular basis is simple and well-understood. Writing a React component or scaffolding an API route is a no-brainer for even the last-gen AI models. I wanted to know, how far can we push AI on a non-trivial, deeply complex coding challenge?

For this experiment, I decided to build a programming language from scratch. And this isn't just pure vibecoding. I use AI as an overly enthusiastic, but highly knowledgeable co-worker. I provide the high-level vision and constraints and guide the process; the AI handles the grinding implementation details.

Creating a programming language is both a creative and deeply complex technical problem. It demands a deep understanding of systems programming, logic, language semantics, parsers, lexers, compiler theory and more. It's the kind of challenge that can keep a solo developer such as myself busy for weeks just to get the basics up and running.

## Setting the Stage and Design Session

I started by clearly defining the scope of this challenge. Seven days. One hour per day. So that's a language designed and built in a maximum of **seven hours**.

- The 95% Rule: The AI must serve as the primary co-designer and implementer. 95%+ of the final code must be AI-generated.
- Vision: A modern, highly readable, pseudocode-like language with a coherent, tiny core.
- To reduce implementation complexity, Kavi will transpile into TypeScript with static typing.

Before jumping on to the editor, I used GPT-5 and Claude to brainstorm the language's philosophy, execution plan, and overall structure. During this conversation, I provided a few suggestions to solidify the direction, set the language name, provide examples of expected grammar (eg: `of` expression; `sum of ages / count of ages`), and that it needs to be transpiled to TypeScript.

Once the initial concept was established, I asked it to consolidate everything discussed so far into a formal specification, complete with an EBNF grammar draft.

Here is the finalized language philosophy we designed:

1. Readable by Humans, Executable by Machines
2. Declarative by Default
3. Static Safety, Dynamic Feel
4. Minimal Core, Extend via Modules
5. Predictable, No Hidden Magic
6. Transpiles to Clean, Modern JS/TS
7. Indent-Based, Minimal Syntax
8. Designed for the Modern Web

## Reviewing the Spec

Before moving on to the next step, I executed a crucial step: I asked several AI models to review the spec and provide their thoughts, areas for improvement, and suggest next steps for implementation.

This turned out to be quite useful as I was able to identify several issues that needed to be addressed:

- Incomplete Grammar: Gaps in the EBNF grammar, particularly around the `of` expression syntax.
- Ambiguous Map Syntax: Parsing precedence was not clearly defined for inline versus block maps.
- Underspecified features: A few important elements like returns, comments, destructuring, error handling, and strings were underspecified.
- Well defined Type System: The type system needed clearer definitions around available types, type inference rules, and type coercion.

This helped me solidify the language spec and plan out the next steps. You can check out the finalised specification in the project [language-spec.md](https://github.com/pubudu-ranasinghe/Kavi/blob/3fbc93b89085c5e004f0c5c38904c2927d563bed/docs/language-spec.md) here.

That's it for day one. Tomorrow, we will be working on setting up the project structure and tooling.

Stay tuned!
