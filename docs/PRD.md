# Laurie Hanson Books: Product Requirements Document

| | |
|---|---|
| **Status** | Draft v0.2, for review and iteration |
| **Date** | 2026-11-06 |
| **Project** | Reskin and re-engineer lauriehansonbooks.com |
| **Decisions needed** | See [§16 Open Questions](#16-open-questions). The first five affect scope the most. |

**How to use this document.** Every requirement has a stable ID, so it can be discussed or changed by reference. Priorities are **M** (must have for launch), **S** (should have, soon after launch) and **C** (could have, later). Anything marked **[Confirm]** is an assumption or a public-source fact that needs checking.

---

## 1. Summary

Laurie Hanson writes children's books about golden retrievers. She sells signed, personally dedicated copies from her website. The site lists two books, and a third is being written.

The current site works but looks dated, can't be found well by search engines, and has very little behind it for running the business. This project replaces it with:

1. **A modern storefront** that helps visitors choose the right book and buy it easily.
2. **Clear routes for every kind of buyer:** signed copies direct from Laurie, Amazon, and the catalog site used by libraries and schools.
3. **Strong search visibility**, which the current site's architecture largely prevents.
4. **A back office** for orders, fulfilment, customers and follow-up marketing.
5. **A catalog that can grow**, so adding the third book and later titles needs no developer work.

### Goals and proposed measures

No analytics exist today and the site currently has no meaningful traffic, so there are no baselines. Capturing them starts at launch, and the numbers appear in the back office (§7.7). Rates such as conversion won't mean much until traffic builds, so early targets focus on counts and trends.

| Goal | Measure | Proposed target |
|---|---|---|
| Be found | Non-brand organic search clicks | Upward trend, measured from launch |
| Be found | Book pages indexed by Google | 100% |
| Help people choose and buy | Visit-to-order conversion; checkout completion | Set a baseline once traffic is large enough to be meaningful, then improve |
| Sell more per order | Books per order | Baseline, then improve (bundles, cross-sell) |
| Never lose an order | Paid orders missing from the back office | 0 |
| Fulfil reliably | Time from order to shipped | Under the promised time, once set (Q9) |
| Build an audience | Email subscribers; repeat-purchase rate | Baseline, then grow toward book 3's launch |
| Quality | Core Web Vitals on mobile; accessibility | "Good" on all three; WCAG 2.2 AA |

---

## 2. Audiences

| Audience | What they want | What the site must do |
|---|---|---|
| **Gift buyer** (grandparent, parent, aunt or uncle, family friend; likely the main buyer) | A special gift for a child; reassurance that it suits the child's age | Recommend by age, make the signed dedication the star, work well on a phone, feel trustworthy |
| **Dog lover or golden retriever community member** | A book that captures the bond with a dog; a connection to the cause | Tell the real stories of Treasure and Karma; explain the Morris Animal Foundation link |
| **Amazon-preferring buyer** | Familiar checkout and fast shipping | A clear link to Amazon, with an honest note on what differs (not personally signed) **[Confirm]** |
| **Librarian or school buyer** | ISBNs, grade level, format and awards, and buying through their usual vendor | A dedicated page with the catalog link and a one-page sell sheet |
| **Laurie (owner/operator)** | See what to sign and ship; keep in touch with readers; no technical work | A simple, phone-friendly back office |
| **Technical maintainer** | Low upkeep and low risk | Current tools, automated deployment, monitoring, minimal custom code |

---

## 3. Current State

Based on a review of this repository and the live site on 2026-11-05. The last code change was on 2024-11-16.

### 3.1 What exists

| Area | Current implementation |
|---|---|
| Pages | Home, Good Girl, Karma, Treasure's Gift, Purchase, and an internal order report |
| Technology | Vue 3.0.5 with Vue CLI 4, Tailwind 2, Vuex and Firebase 8; a browser-only single-page app |
| Hosting | Netlify serves the live site. A GitHub Action also targets Azure on Node 14, so **which deployment path is really in use needs confirming** |
| Payments | PayPal Buttons, with Venmo enabled and PayPal Credit disabled; all order logic runs in the browser |
| Order data | Firestore `orders` collection |
| Traffic | None to speak of, per the owner (2026-11-06). Changes can be deployed immediately without affecting visitors |
| Pricing | Both books $5.00 ("normally" $13.95 and $16.95), a deliberate steep discount off list price to recoup costs on surplus stock. Shipping is $3 + $1 per book. Maximum 5 books per order |
| Personalization | An optional free-text dedication per book; all books are described as signed |
| Tests | Effectively none (a placeholder only) |

### 3.2 Worth keeping

- **The signed, dedicated copy.** This is the one thing Amazon can't offer, and the new site should be built around it.
- **The artwork.** The illustrations are charming and high-resolution, and are the site's strongest visual asset.
- **Reader testimonials**, the **2017 Purple Dragonfly Award**, and the real stories of Treasure and Karma.
- **PayPal and Venmo** as payment options, and the existing order history.

### 3.3 Gaps the project must close

**Choosing and buying**

| # | Finding | Consequence |
|---|---|---|
| G1 | "Buy Treasure's Gift" opens the purchase page with *Good Girl, Karma* preselected | Buyers can order the wrong book |
| G2 | No cart. Buyers pick a number of books, then a title for each | Awkward, and capped at 5 books |
| G3 | No guidance on which book suits which child; no comparison | The site doesn't help people choose |
| G4 | **Amazon links are not visible.** The one link (Treasure's Gift only) is hidden, and Good Girl, Karma has none | A stated requirement is unmet |
| G5 | No library or school link or information anywhere | A stated requirement is unmet |
| G6 | **The "Meet the Author" content exists but is not shown on any page** | Laurie's story is missing from the live site |
| G7 | The Morris Animal Foundation connection isn't mentioned; its logo is in the repo, unused | A strong reason to buy is missing |
| G8 | A purchase page fixed at two columns, very large type throughout, autoplaying carousels, images without alt text | Likely poor on phones (from reading the code, not device testing) and for screen-reader users |

**Being found**

| # | Finding | Consequence |
|---|---|---|
| G9 | Pages are built in the browser. The server sends an empty shell titled "LaurieHansonBooks" to every URL | No per-page titles or descriptions; indexing is unreliable, and link previews are blank |
| G10 | No meta descriptions, social tags, structured data or `lang` attribute | No rich results; weak signals to search engines |
| G11 | `robots.txt` and `sitemap.xml` return the home page's HTML instead of real files | Search engines have no sitemap |
| G12 | Unknown URLs return HTTP 200 instead of 404 | "Soft 404" errors in search |
| G13 | No analytics or Search Console evidence in the code | Performance can't be measured |

**Running the business**

| # | Finding | Consequence |
|---|---|---|
| G14 | The report lists names, emails, books and dedications only. **It has no shipping address, shipped status, tracking or search** | Fulfilment relies on cross-checking PayPal and memory |
| G15 | Completed orders are saved by the customer's browser after payment | If the tab closes at the wrong moment, **a paid order can be missing from the report** |
| G16 | The site sends no confirmation or shipping emails (buyers get only PayPal's receipt) | Less reassurance, more support questions |
| G17 | No inventory, promotions, refunds workflow, in-person sale records or customer list | All done by hand, if at all |
| G18 | No email signup or campaigns; abandoned checkouts are listed but not actionable | No audience for the third book |
| G19 | Sales tax is not calculated | Possible compliance gap (see Q10) |
| G20 | Prices and titles are hard-coded | Every price change or new book needs a developer |

**Engineering health**

| # | Finding | Consequence |
|---|---|---|
| G21 | The framework stack and build tools date from around 2021 and early release candidates; Node 14 is long out of support | Security and upkeep risk; upgrading is close to a rewrite |
| G22 | About 126 MB of images and PDF in the source tree, including an 89 MB unreferenced PDF, duplicates ("copy" files) and stock template backgrounds | Slow builds, large repository |
| G23 | Unused code from earlier versions (old purchase flow, unused pages and components) | Harder to maintain |
| G24 | **Security issues need attention regardless of the redesign.** Details are deliberately not recorded here because this repository is public. See [§9.3](#93-security) and [§14 Phase 0](#14-delivery-phases) | Risk to customers and the business |

---

## 4. Scope

**In scope:** public website redesign; catalog; cart and checkout; Amazon and library links; SEO and analytics; back office; transactional and marketing email; data migration; URL redirects; policies; hosting and deployment.

**Out of scope for now** (each can be revisited):

- Native mobile apps
- Customer login accounts (guest checkout with emailed order links instead; see Q8)
- E-books, audiobooks and digital delivery
- International shipping (see Q11)
- Importing Amazon or catalog sales automatically (manual entry only, see BO-46)
- Non-book merchandise (the catalog shouldn't prevent it later)

---

## 5. Public Website Requirements

### 5.1 Site map

```
/                                Home
/books                           All books, with "help me choose"
/books/good-girl-karma           Book page
/books/treasures-gift            Book page
/books/<book-3>                  Book page (coming-soon, then live)
/signed-copies                   How signing and dedications work
/libraries-and-schools           For librarians and educators
/about                           Meet Laurie, Treasure and Karma
/giving-back                     Morris Animal Foundation connection  [Confirm]
/news                            Updates and articles (S)
/contact                         Contact form
/cart  /checkout  /order/<token> Purchase flow and order status
/shipping-returns /privacy /terms Policies
```

### 5.2 Home page

| ID | Requirement | Pri |
|---|---|---|
| WEB-01 | The first screen says who Laurie is, what she offers (signed, personally dedicated books about golden retrievers) and has a clear action, using real artwork | M |
| WEB-02 | Feature every book with cover, one-line pitch, age guide, price, and links to details and purchase | M |
| WEB-03 | Show proof: testimonials, the award, and the Morris Animal Foundation connection | M |
| WEB-04 | Include a short "Meet Laurie" section linking to the About page | M |
| WEB-05 | Include an email signup with a clear benefit, such as first word about the new book | M |
| WEB-06 | Announce the third book when ready, without crowding the books on sale today | S |

### 5.3 Helping visitors choose

| ID | Requirement | Pri |
|---|---|---|
| CHO-01 | A side-by-side comparison of all books: age or reading level, format, length, story type, price, awards, ways to buy. New books appear automatically | M |
| CHO-02 | A short "Who is this for?" guide (child's age, plus reading alone or read aloud) that recommends a book. Under 30 seconds and no email required | M |
| CHO-03 | A plain-language age and reading label on every book, e.g. "Ages 2–5: read aloud or first reader" **[Confirm ages with Laurie]** | M |
| CHO-04 | Preview of interior pages on each book page, using the page-turning presentation in BK-07 | M |
| CHO-05 | "Buy both" bundle prompt on the book pages and in the cart | S |
| CHO-06 | Occasion prompts (birthday, new puppy, holiday, memory of a beloved dog) on the books page | C |

The content behind this is already strong:

| | *Good Girl, Karma* | *Treasure's Gift* |
|---|---|---|
| **Best for** | Pre-readers and beginning readers | First and second graders; younger children read aloud |
| **Format** | Softcover, 15 illustrated pages, short phrase and picture on each spread | Hardcover, 36 pages in seven chapters |
| **Story** | Short scenes of the good things Karma does | Treasure helps Annie make friends after a move, before her birthday |
| **Extra** | Supports the Morris Animal Foundation **[Confirm wording]** | 2017 Purple Dragonfly Award winner, Animal/Pet category |

### 5.4 Book detail pages

| ID | Requirement | Pri |
|---|---|---|
| BK-01 | Each page has: cover, gallery, description, age guide, format details (ISBN, pages, binding, dimensions, publisher, date), awards, testimonials specific to that book, and related books | M |
| BK-02 | The buying panel shows **every way to buy** (see §5.5), with the signed copy as the primary choice | M |
| BK-03 | Availability states controlled from the back office: *Available*, *Low stock*, *Out of stock (join list)*, *Coming soon*, *Pre-order*, *Retired* | M |
| BK-04 | Replace autoplaying carousels with a user-controlled gallery. This is also the presentation on narrow screens (BK-08) | M |
| BK-05 | "Buy" actions always carry the correct book through to the cart (fixes G1) | M |
| BK-06 | Short book trailer or read-along video | C |
| BK-07 | **Page-turning book viewer.** On screens wide enough to support it, book pages appear as an open book or magazine, and the reader turns them with a realistic page-turn. Which pages appear is set per book (Q20) | M |
| BK-08 | **Narrow screens.** Below the width where a page-turn works well, the same pages appear in the BK-04 gallery, at a readable size. The width is set during design and tested on real phones and tablets, including when they are rotated | M |
| BK-09 | **Accessible and robust.** The viewer works by mouse, touch and keyboard, and with a screen reader, with text alternatives for each page. With reduced-motion preferences, pages change without the animation. Without JavaScript, the page images still appear (NFR-10, NFR-13) | M |
| BK-10 | **Fast.** The viewer loads only when needed and fetches page images as the reader approaches them, so it doesn't harm page speed (NFR-01). Any package used must be maintained, licensed for commercial use and compatible with the chosen framework | M |

### 5.5 Ways to buy

| ID | Requirement | Pri |
|---|---|---|
| CH-01 | **Direct:** add to cart for a signed copy with an optional dedication | M |
| CH-02 | **Amazon:** a link per book, per format, set in the back office. Treasure's Gift's is known; Good Girl, Karma's is needed | M |
| CH-03 | **Libraries and schools:** a link to the catalog site per book, shown on book pages and the libraries page. **URL needed from Laurie (Q2)** | M |
| CH-04 | Links open in a new tab, are labeled clearly, and are tracked as analytics events | M |
| CH-05 | Hide a channel automatically for a book that isn't sold there, rather than showing a dead link | M |
| CH-06 | Support additional retailers (Barnes & Noble, Bookshop.org, local stores) by adding back-office entries, with no code | S |
| CH-07 | Amazon affiliate tagging with the required disclosure, if Laurie wants it (Q6) | C |

### 5.6 Libraries and schools page

| ID | Requirement | Pri |
|---|---|---|
| LIB-01 | A dedicated page with a catalog link and, per book: ISBN, binding, grade or interest level, subject terms, page count, list price and awards | M |
| LIB-02 | Downloadable one-page sell sheet (PDF), generated from or kept consistent with catalog data | S |
| LIB-03 | An inquiry form for bulk orders, school visits and readings, routed to the back office | S |
| LIB-04 | Purchase-order and invoiced bulk ordering handled as manual orders (BO-14) | S |

### 5.7 Cart and checkout

| ID | Requirement | Pri |
|---|---|---|
| CHK-01 | A persistent cart: add, remove and change quantity, on any device. Survives a page reload | M |
| CHK-02 | Guest checkout on one screen or a short sequence, designed for phones first | M |
| CHK-03 | **Per-copy dedication.** Each copy can carry its own optional dedication, with help text, examples, a character limit and a clear "signed only" default. Multiple copies of a title can have different dedications | M |
| CHK-04 | Live preview of the dedication | C |
| CHK-05 | Show book total, shipping, tax and grand total before payment | M |
| CHK-06 | Accept PayPal and Venmo, plus cards directly. Payment details never touch this site's servers | M |
| CHK-07 | Apple Pay and Google Pay | S |
| CHK-08 | Separate billing and shipping details, and "This is a gift" with an optional note and no prices on the packing slip | S |
| CHK-09 | Support promo codes (BO-32) | S |
| CHK-10 | Replace the 5-book limit with a configurable limit; beyond that, invite a bulk inquiry | M |
| CHK-11 | Prices, discounts, shipping and tax are **calculated on the server**, and order amounts are verified against the payment provider | M |
| CHK-12 | A paid order is recorded by the **server**, using payment-provider webhooks, whether or not the customer's browser stays open (fixes G15) | M |
| CHK-13 | An unchecked marketing opt-in at checkout | M |
| CHK-14 | Payment failures show a plain message with a next step and keep the cart intact | M |
| CHK-15 | A holiday cutoff message ("Order by Dec X for delivery by Christmas"), set in the back office | S |
| CHK-16 | If a price or shipping rate changes while a book is in a saved cart, checkout uses the current amount and tells the buyer what changed before payment | M |

### 5.8 After purchase

| ID | Requirement | Pri |
|---|---|---|
| POST-01 | A confirmation page and email showing books, dedications, address, totals, the bank-statement name and expected ship time | M |
| POST-02 | A secure, unguessable order-status link, with no login needed | M |
| POST-03 | A customer can correct a dedication or address until signing has started, either self-serve or by a reply that goes to Laurie | S |
| POST-04 | A warm personal note from Laurie in the emails | M |

### 5.9 Supporting pages

| ID | Requirement | Pri |
|---|---|---|
| PG-01 | **About:** Laurie's story, restored from the unused content and updated, with photos. **Facts must be re-confirmed** (e.g., how many dogs she has today) | M |
| PG-02 | **Signed copies:** how signing and dedications work, with examples and photos of real inscriptions | M |
| PG-03 | **Giving back:** the Morris Animal Foundation connection with accurate, approved wording, and logo use approved by the Foundation | M |
| PG-04 | **Contact:** a spam-protected form. Do not publish a personal email address | M |
| PG-05 | **Policies:** shipping, returns (including personalized items), privacy and terms | M |
| PG-06 | **FAQ:** sourced from real customer questions | S |
| PG-07 | **News/articles:** updates and useful content supporting SEO, such as books for dog-loving kids | S |
| PG-08 | **Events and appearances** list, including school visits and fairs | C |
| PG-09 | Free extras for classrooms and families, such as coloring pages or discussion guides, optionally in exchange for an email signup | C |

### 5.10 The third book

| ID | Requirement | Pri |
|---|---|---|
| NEW-01 | Adding a book is a back-office task needing no code, including its pages, sitemap entry, comparison and structured data | M |
| NEW-02 | A "Coming soon" page with a notify-me signup, tagged to that book, at a stable URL that later becomes the live page | M |
| NEW-03 | Optional pre-orders: payment now, shipped at release, shown separately in fulfilment | S |
| NEW-04 | A launch campaign to the notify-me list, then all subscribers, then past customers (MKT-06) | S |
| NEW-05 | Support series or book groupings (e.g., "Golden Retriever Stories") | C |

---

## 6. SEO Requirements

| ID | Requirement | Pri |
|---|---|---|
| SEO-01 | **Every public page is delivered as complete HTML from the server or a pre-rendered file**, so it's readable without running JavaScript | M |
| SEO-02 | Unique title and meta description per page, editable in the back office, with sensible defaults | M |
| SEO-03 | Clean, lowercase, descriptive URLs with one canonical URL per page. `www` continues to redirect to the bare domain | M |
| SEO-04 | **301 redirects** from all old URLs: `/GoodGirlKarma`, `/TreasuresGift`, `/Purchase` and known variations | M |
| SEO-05 | A real `sitemap.xml` generated from content, and a real `robots.txt` that excludes cart, checkout, order and admin pages | M |
| SEO-06 | A real 404 page with HTTP 404 and helpful links | M |
| SEO-07 | Structured data validated with Google's Rich Results Test: `Book` (with ISBN and author), `Product`/`Offer` (price and availability), `Person`, `Organization`, `BreadcrumbList` | M |
| SEO-08 | Open Graph and social tags with designed share images, so shared links show the book cover | M |
| SEO-09 | Semantic headings, `lang="en"`, and descriptive alt text on all images | M |
| SEO-10 | Modern responsive images, lazy loading and strong Core Web Vitals (§9.1) | M |
| SEO-11 | Google Search Console and Bing Webmaster Tools set up, sitemap submitted, and old URLs watched for 90 days after launch | M |
| SEO-12 | Privacy-respecting analytics with key events: view book, add to cart, begin checkout, purchase, outbound Amazon and catalog clicks, signup. Collection starts at launch so the back-office reports (§7.7) have history. Dedications, names and other personal details are never sent as analytics data | M |
| SEO-13 | Keyword research validating priority topics. Starting ideas: *children's books about golden retrievers*, *signed/personalized children's book*, *gift for a child who loves dogs*, *beginning reader dog books* | M |
| SEO-14 | Free product listings through Google Merchant Center | S |
| SEO-15 | Off-site profile cleanup: Amazon Author Central, Goodreads, Google Business Profile if applicable, with a consistent name, bio and link | S |
| SEO-16 | Backlink outreach: Morris Animal Foundation, Purple Dragonfly, golden retriever clubs, Minnesota authors and libraries, dog-writer groups | S |
| SEO-17 | An editorial plan for the News section | S |

> **Expectation to set:** Google generally doesn't show review stars for a business's own reviews of itself on its own site, so testimonials will build trust but shouldn't be counted on for stars in results. Amazon and Goodreads reviews remain the main source of third-party ratings.

---

## 7. Back Office Requirements

**Design principle:** Laurie should be able to open it on a phone and immediately see, "What do I need to sign and ship today?"

### 7.1 Access

| ID | Requirement | Pri |
|---|---|---|
| BO-01 | Secure login on every back-office page and API, with multi-factor authentication | M |
| BO-02 | Roles: **Owner** (all), **Admin** (all except user management and refunds), **Fulfilment** (orders only) | S |
| BO-03 | An audit log of who changed orders, prices and refunds, and when | S |
| BO-04 | Dashboard: orders to fulfil, today and this month's sales, low stock, new inquiries, visitors, and a summary of the sales funnel (RPT-04, RPT-08) | M |

### 7.2 Orders and fulfilment

Proposed order lifecycle:

```
Checkout started → (Abandoned)
                 → Paid → Signing → Ready to ship → Shipped → Delivered
                    ↓                                 ↓
                 On hold / Cancelled          Refunded / Returned
```

| ID | Requirement | Pri |
|---|---|---|
| BO-10 | Order list with status tabs, search (name, email, order number) and filters (book, date, has dedication) | M |
| BO-11 | Order detail: customer, shipping address, each copy with its **dedication shown prominently**, payment reference, full timeline and internal notes | M |
| BO-12 | **Signing sheet:** a printable or on-screen list of all dedications to write, by book, large and easy to read | M |
| BO-13 | **Packing slip and shipping label data:** printable slips and an address export. Gift orders hide prices | M |
| BO-14 | **Manual order entry** for fairs, events, cash, checks and school purchase orders, sharing the same reports and inventory | M |
| BO-15 | Mark as shipped, singly or in bulk, with carrier and tracking number; this triggers the shipping email | M |
| BO-16 | Full and partial refunds through the payment provider from within the order | S |
| BO-17 | Edit address or dedication with a logged change | M |
| BO-18 | Purchase labels from within the back office through a shipping service (e.g., USPS Media Mail rates), if volume justifies it (Q7) | C |
| BO-19 | Alert the owner by email or phone for each new paid order and for any order unshipped after a configured number of days | M |
| BO-20 | Automatic reconciliation against the payment provider, flagging mismatches | S |

### 7.3 Catalog, pricing and inventory

| ID | Requirement | Pri |
|---|---|---|
| BO-30 | Create and edit books: all details, images, status, SEO text, retailer links and testimonials | M |
| BO-31 | Set each book's selling price and list price independently, with optional sale windows and no code needed. A change takes effect immediately **everywhere**: book pages, comparison, cart, checkout and structured data, including pages delivered as pre-rendered HTML (SEO-01). Past orders keep the price paid. Entries are validated, and an unusual value, such as a price above list or a large drop, asks for confirmation | M |
| BO-32 | Promotions: percent or amount off, free shipping and bundles; with codes, dates and usage limits | S |
| BO-33 | Configure shipping costs with no code: a base charge, a per-book charge and an optional free-shipping threshold (today: $3 base + $1 per book). Changes apply immediately to the cart, checkout and any shipping costs quoted on the site, so policy text never hard-codes a rate. Past orders keep the shipping charged | M |
| BO-34 | Track stock per book, adjust for received or event stock, decrement on sale, low-stock alert, and out-of-stock handling | M |
| BO-35 | Track copies given away and damaged | C |
| BO-36 | Optional quantity-based shipping tiers and per-book shipping differences (e.g., hardcover vs. softcover), if real postage costs justify them | C |

### 7.4 Customers

| ID | Requirement | Pri |
|---|---|---|
| BO-40 | Customer record: contact details, order history, total spend, subscription status and notes | M |
| BO-41 | Merge duplicate customers by email | S |
| BO-42 | Handle privacy requests: export, correct, delete | S |
| BO-43 | Tag customer types (family, library, school, retailer) | S |
| BO-44 | Record bulk and school inquiries, with simple follow-up status | S |
| BO-45 | Test or internal orders can be flagged and excluded from reports | M |
| BO-46 | Manually record sales from Amazon or catalog sites for total-sales reporting | C |

### 7.5 Marketing and follow-up

**Recommendation:** connect to an established email marketing service rather than building one. Deliverability, unsubscribe handling, templates and automations are hard to do well and inexpensive to buy. The back office keeps customers and orders in sync with it. See Q4.

| ID | Requirement | Pri |
|---|---|---|
| MKT-01 | Signup forms with source tracking and a confirmation step | M |
| MKT-02 | Sync customers, purchases and preferences to the email service, with segments: buyers by book, non-buyers, library or school, book-3 notify list, and dormant | S |
| MKT-03 | **Thank-you and review request:** about 14–21 days after shipping, asking for an Amazon or site review, with a link | S |
| MKT-04 | **Cross-sell:** about 60 days after purchase, recommending the book they don't own; suppressed if owned | S |
| MKT-05 | **Abandoned checkout:** one reminder within 24 hours, where the customer entered an email and permission rules allow it (Q5) | S |
| MKT-06 | **Campaign tools:** new-book launches, seasonal gift campaigns (holiday, back to school), and newsletters, with scheduling and test sends | S |
| MKT-07 | **Gift anniversary reminder:** about 11 months after a birthday or holiday gift order | C |
| MKT-08 | Collect and approve testimonials, then publish them on book pages | S |
| MKT-09 | Report opens, clicks, unsubscribes and attributed revenue per campaign | S |
| MKT-10 | Campaign links carry tracking tags so analytics can attribute orders | S |
| MKT-11 | Unsubscribes and bounces are honored everywhere, automatically. **Children's names from dedications are never used in marketing or sent to the marketing service** | M |
| MKT-12 | Social sharing images and simple campaign landing pages | C |

### 7.6 Transactional email

| ID | Trigger | Pri |
|---|---|---|
| EM-01 | Order confirmation | M |
| EM-02 | Order shipped, with tracking | M |
| EM-03 | Refund or cancellation | M |
| EM-04 | New order alert to owner | M |
| EM-05 | Contact and inquiry notifications | M |
| EM-06 | Order delayed or back-order notice | S |

Sent from an address at the site's domain with SPF, DKIM and DMARC set up. Replies go to a monitored inbox.

### 7.7 Reporting

| ID | Requirement | Pri |
|---|---|---|
| RPT-01 | Sales by period, by book and by channel (web, event, manual), with units, revenue, shipping and refunds | M |
| RPT-02 | CSV export of orders, customers and sales for bookkeeping | M |
| RPT-03 | Sales tax report by period and state | M |
| RPT-04 | **Sales funnel in the back office:** visit → book view → add to cart → begin checkout → paid, with abandoned checkouts, for a selectable date range. Show counts beside percentages, since percentages mislead at low traffic. "Paid" comes from order records, not the analytics tool | M |
| RPT-05 | **Giving-back report:** amount owed to the Morris Animal Foundation under the agreed formula, per period | S |
| RPT-06 | Inventory report, including stock value and copies sold over time | S |
| RPT-07 | Top sources of traffic and buyers | S |
| RPT-08 | **Visitor counts in the back office:** visitors and page views over time, top pages, and outbound Amazon and catalog clicks (those sales happen elsewhere, so clicks are the only signal). All analytics appear inside the back office, behind its login (BO-01), so nobody needs a separate tool | M |
| RPT-09 | Staff visits, test orders (BO-45) and known bots are excluded. The reports state that visitor counts are estimates, because of ad blockers and bots, while order counts are exact | M |

---

## 8. Data

Core records (a conceptual sketch, not a final design):

| Record | Key contents |
|---|---|
| **Book** | Title, slug, descriptions, age guide, ISBNs, format, images, status, SEO text |
| **Offer/Price** | Book, price, list price, sale dates |
| **Shipping rule** | Base charge, per-book charge, free-shipping threshold, effective date |
| **Retail link** | Book, retailer or catalog, URL, label, order |
| **Inventory** | Book, on-hand count, reorder level, adjustments log |
| **Customer** | Name, email, addresses, tags, marketing status |
| **Order** | Number (non-guessable public token), status, totals, tax, shipping, channel, payment references, notes, timeline |
| **Order item** | Book, unit price at the time of sale, **dedication for this copy**, signed flag, fulfilment status |
| **Shipment** | Order, carrier, tracking, date |
| **Promotion** | Code, rules, dates, usage |
| **Testimonial** | Text, attribution, book, permission, published flag |
| **Subscriber/Consent** | Email, source, consent date, status, interests |
| **Inquiry** | Type, contact, message, status |
| **Audit entry** | Who, what, when |

### Migration of existing orders

| ID | Requirement | Pri |
|---|---|---|
| MIG-01 | Export all existing Firestore orders and keep a secured archive | M |
| MIG-02 | Map the old status correctly. A record with payment details is **paid**, and one without is **abandoned**; the stored status text alone can't be relied on | M |
| MIG-03 | Remove test orders; preserve order IDs, PayPal references and dedications | M |
| MIG-04 | Reconcile imported totals against PayPal's transaction export | M |
| MIG-05 | **Don't add past customers to newsletters automatically.** Past buyers get at most one honest invitation to join (Q5) | M |
| MIG-06 | Retire the old database and credentials after a verified migration | M |

Data retention: keep financial records for the period the accountant advises; proposed: delete or anonymize dedications after 24 months, because they often name children (Q12).

---

## 9. Non-Functional Requirements

### 9.1 Performance

- **NFR-01 (M):** On mobile at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Lighthouse performance and SEO ≥ 90 on key pages.
- **NFR-02 (M):** Hero images under 200 KB in modern formats, from a CDN, with responsive sizes.
- **NFR-03 (M):** Original artwork kept outside the code repository in managed storage. Clean up the current asset folder.

### 9.2 Accessibility and compatibility

- **NFR-10 (M):** WCAG 2.2 AA, covering keyboard use, screen readers, color contrast, focus states, form errors and reduced-motion preferences. Many buyers are likely to be older, so favor large type and generous tap targets.
- **NFR-11 (M):** Phone-first responsive design from 320 px up.
- **NFR-12 (M):** Latest two versions of Chrome, Safari, Edge and Firefox, including iOS Safari.
- **NFR-13 (M):** Public book content is readable with JavaScript disabled.

### 9.3 Security

- **SEC-01 (M, Phase 0):** Treat any credential that has ever been in source control as compromised; rotate it and remove it from the code.
- **SEC-02 (M, Phase 0):** Customer data can be read only by authenticated, authorized staff. Verify this with a real test from outside the application.
- **SEC-03 (M):** Secrets live in the hosting provider's secret store; automated secret scanning runs on the repository.
- **SEC-04 (M):** The server is the source of truth for orders, payments and prices. Webhooks are signature-verified and safe to receive twice.
- **SEC-05 (M):** Payment entry stays on the provider's hosted fields, keeping PCI scope to the simplest level.
- **SEC-06 (M):** Input validation, output escaping (especially dedications), CSRF protection, rate limiting, bot protection on forms, security headers and HTTPS only.
- **SEC-07 (M):** Automated dependency updates; no end-of-life runtimes.
- **SEC-08 (M):** No test or sandbox mode can be switched on through a public URL in production.
- **SEC-09 (S):** Review the repository's public visibility. Recommended: private.

### 9.4 Privacy and compliance

> These need a quick check with an accountant or attorney. They are flagged for confirmation, not legal or tax advice.

| ID | Topic | Requirement |
|---|---|---|
| CMP-01 | **Sales tax** | Confirm with an accountant whether tax is owed on sales and where, then calculate it at checkout. Minnesota nexus is the starting point. |
| CMP-02 | **Email (CAN-SPAM)** | Working unsubscribe, accurate sender and a physical postal address in marketing email. **Suggest a P.O. box or similar rather than a home address.** |
| CMP-03 | **Children's privacy** | The site is aimed at adult buyers and doesn't knowingly collect data from children under 13. Dedications often name children, so handle them carefully (MKT-11, §8). |
| CMP-04 | **Discount wording** | A list price with a steep discount is standard for self-published books and stays. Show a true list price (e.g., one printed on the book or used by retailers), labeled "List price". Avoid "Normally $13.95": it implies the book usually sold at that price here, while $5 has run since late 2024. Same layout, safer word. |
| CMP-05 | **Charitable claims** | State exactly how purchases benefit the Morris Animal Foundation, with its approval. Check whether state rules apply to the wording. |
| CMP-06 | **Testimonials** | Must be genuine, with permission to publish. Confirm the current three and which book each describes. |
| CMP-07 | **Privacy policy and cookies** | Publish a policy describing data use and service providers. Prefer cookieless analytics. Confirm state privacy-law applicability. |
| CMP-08 | **Returns** | Publish a clear policy for personalized books. |
| CMP-09 | **Artwork rights** | Confirm rights to use illustrations, photos and third-party logos on the web and in marketing. |

### 9.5 Reliability and operations

- **NFR-20 (M):** 99.9% uptime target for the storefront; pages remain viewable if the back office or database is down.
- **NFR-21 (M):** Automated daily backups with a tested restore.
- **NFR-22 (M):** Error and uptime monitoring with alerts, especially for failed webhooks and emails.
- **NFR-23 (M):** One automated deployment path with preview environments. Retire whichever of Netlify or Azure isn't used.
- **NFR-24 (M):** Separate test and production environments, using the payment provider's sandbox.
- **NFR-25 (M):** Automated tests covering prices, tax, shipping, order creation, webhooks and login, plus one end-to-end purchase.
- **NFR-26 (S):** Monthly running costs documented and kept proportionate to sales (Q1).
- **NFR-27 (M):** A short owner's guide and a technical runbook.

---

## 10. Design Direction

**Concept: warm, hand-illustrated and personal, like an inscribed storybook.** It should feel like Laurie herself is handing you the book, not like a generic shop.

| Element | Direction |
|---|---|
| **Artwork** | The hero of the design. Each book's art sets the tone: soft watercolor for *Good Girl, Karma*, richly saturated gouache-style portraits for *Treasure's Gift* |
| **Color** | Replace today's purple, green and indigo backgrounds with a warm cream paper base; golden-retriever amber as the accent; a sky blue or leafy green drawn from the art as secondary. Check contrast against WCAG AA |
| **Type** | A warm, characterful serif or soft display face for headings, and a very readable sans-serif for body text, at a generous size |
| **Signature element** | A handwritten-style dedication motif (only for decoration, not for essential text), with photos of real signed title pages |
| **Book viewer** | A page-turning open book on wide screens (BK-07). The package and details are chosen during design |
| **Layout** | Generous space, one clear action per section, and real photographs of Laurie with her dogs |
| **Tone of voice** | First-person, warm, gently funny and honest. Written for adults choosing a gift; not babyish |
| **Avoid** | Autoplay, pop-ups on arrival, stock template imagery, countdown timers or false urgency, and sale-style clutter |

**Deliverables before build:** style tile or moodboard; mobile and desktop mockups of Home, Book, Cart/Checkout and the back-office order page; a clickable prototype; and a quick test with two or three people in the target audience.

---

## 11. Integrations

| Need | Candidate | Note |
|---|---|---|
| Payments | PayPal + Venmo (existing); consider Stripe for direct cards and wallets | Needs Q1 and CHK-06. Compare fees on low-priced orders |
| Email (transactional) | Postmark, Resend or similar | |
| Email (marketing) | MailerLite, Kit, Mailchimp or similar | Q4 |
| Sales tax | Simple rules or a tax service, per the accountant | CMP-01 |
| Shipping | Manual to begin, then Pirate Ship, Shippo or similar | Q7 |
| Analytics | Plausible, Fathom or GA4 | Must offer a reporting API or equivalent so RPT-04 and RPT-08 can appear in the back office. Confirm this, and the plan it requires, before choosing. A small first-party event log is the fallback |
| Search | Google Search Console, Bing Webmaster Tools, Merchant Center | |
| Retail links | Amazon; library/school catalog (Q2) | Links only |
| Monitoring | Sentry or similar; uptime monitor | |

---

## 12. Proposed Technical Approach

This is **a recommendation for discussion, not a requirement.** The largest decision is how much to build versus buy.

| Option | Pros | Cons |
|---|---|---|
| **A. Custom-built site and back office** | Full control; lowest monthly fees; fits exactly | Most development, and all upkeep falls on the maintainer |
| **B. Hosted commerce (e.g., Shopify) with a custom theme** | Orders, inventory, tax, refunds, labels, email and apps included; lowest technical risk | Recurring fees; less control; dedication and signing workflow needs customizing or an app |
| **C. Hybrid: custom public site, lightweight custom back office, and bought services for email, shipping and analytics** | Great SEO and design; owns the signing workflow; avoids rebuilding commodity features | More integration than B; still needs maintenance |

**Recommendation: Option C, provided the maintainer has the time; otherwise Option B.** With no traffic today, low sales alone no longer points to Option B. Its monthly fees would run with little revenue to cover them, at $5 per book, while Option C can run at low fixed cost but needs more build and upkeep time. The page-turning viewer, the signing workflow and analytics inside the back office also fit a custom build more naturally. Order history in Firestore and PayPal should still be checked, and the budget and maintainer settled, before deciding (Q1).

If Option C is chosen:

- **Framework:** Nuxt (keeps the existing Vue skills) with static or server rendering for public pages.
- **Hosting:** Stay on Netlify or a similar platform; serverless functions for checkout and webhooks.
- **Database:** Managed Postgres, such as Supabase or Neon. Order data is relational, and reporting is simpler than with Firestore.
- **Authentication:** A managed provider with MFA.
- **Images:** A CDN or image service, keeping originals outside the repo.
- **Approach:** A new build rather than incremental upgrades. Reuse the content, artwork and order data, not the code.

---

## 13. Launch and Cutover

| ID | Requirement | Pri |
|---|---|---|
| LCH-01 | Full test on a preview URL hidden from search engines, including real low-value live payments and refunds. Having no traffic makes deployment low-risk, but a real buyer must still be able to pay and receive a book correctly | M |
| LCH-02 | Content checklist complete and signed off by Laurie (§17) | M |
| LCH-03 | Redirect map tested, and analytics and Search Console verified | M |
| LCH-04 | Rollback plan: old site stays deployable until real orders have gone through the new site from payment to shipping | M |
| LCH-05 | Laurie walks through a mock order, end to end, before launch | M |
| LCH-06 | **Deploy whenever ready.** With no traffic, there is no launch freeze, including over the 2026 holidays, and work can go live as each piece is ready. Once promotion brings real traffic, avoid major changes during peak gift periods | M |

---

## 14. Delivery Phases

| Phase | Contents | Exit criteria |
|---|---|---|
| **0. Immediate fixes (now, independent of the redesign)** | SEC-01, SEC-02, SEC-09; confirm hosting; back up Firestore. These protect existing customer data, so they stay urgent even with no traffic. Fixing the current site's buying flow (G1, Amazon links) is worthwhile only if the rebuild will take a long time | Secrets rotated, data access verified, and backup confirmed |
| **1. Discovery and design** | Resolve §16; measure order volume; keyword research; collect content; design and prototype | Approved design, chosen architecture |
| **2. Storefront and core commerce** | All **M** items in §5 and §6; server-side checkout; EM-01 to EM-05; migration | New site live, with old URLs redirected |
| **3. Back office** | All **M** items in §7. A minimal version of order list, signing sheet, shipped status, alerts, and price and shipping settings must ship **with Phase 2**, since the old report goes away and those values would otherwise stay in code. Analytics collection starts in Phase 2; the admin reports (RPT-04, RPT-08, RPT-09) arrive here | Laurie runs fulfilment without developer help, and sees funnel and visitor numbers |
| **4. Marketing engine** | Email service integration, automations, promotions, testimonials, news; remaining **S** items | First campaign sent; flows active |
| **5. Book 3 launch** | Coming-soon page as early as possible; pre-orders; launch campaign | Depends on the publication date (Q13) |

The Book 3 coming-soon page and email signup should go up as early as possible (even on the current site, if launch is far away), because every month of list-building helps the launch.

---

## 15. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Back office and marketing scope outgrows the business's size | High cost for low sales | Measure volume first (Q1); buy instead of build; phase strictly |
| Upkeep depends on one person | Site decay, as with the current stack | Fewer custom parts, automatic updates, runbook, managed services |
| Loss of search rankings at cutover | Low: there is little traffic to lose | Keep the redirect map (SEO-04), which is inexpensive and preserves existing links and any search history |
| A new site gets no visitors | The rebuild doesn't produce sales, whatever its quality | Treat SEO and promotion (SEO-13 to SEO-17, email list) as core work, and watch the back-office funnel |
| Page-turning package is unmaintained, heavy or inaccessible | Slow pages, excluded readers, future rework | Prototype on real devices during design; keep it replaceable, using the BK-04 gallery as fallback (BK-08 to BK-10) |
| Showing too many pages | Readers finish a short book online and don't buy | Set a per-book page selection (Q20) |
| Payment fees on low-priced orders | Thinner recovery of costs at $5 per book | Model the net per order; price and shipping are adjustable at any time (BO-31, BO-33) |
| Book 3 date conflicts with the build | Rushed launch | Coming-soon page first; decouple from the rest of the build |
| Migrated data is incomplete | Old orders missing | Reconcile with PayPal export (MIG-04) |
| Over-marketing past buyers | Spam complaints and goodwill loss | Conservative consent and frequency caps |

---

## 16. Open Questions

The recommended default applies if nothing else is decided. Answers should be recorded here.

| # | Question | For | Recommended default | Answer |
|---|---|---|---|---|
| **Q1** | **How many orders a year are there, and what's a sensible monthly running budget and build budget?** Who maintains the site? | Owner | Measure from Firestore and PayPal, then choose Option B or C | Partial: no traffic today (2026-11-06). Order history, budget and maintainer still open |
| **Q2** | **What's the online catalog site for libraries and schools?** Links for both books? Are both books listed? | Laurie | Needed for launch | |
| **Q3** | **What's the long-term pricing?** Is $5 permanent, a promotion, or clearance? What is the cost per copy and shipping cost? | Laurie | Decide before launch; show a truthful list price | Answered 2026-11-06: $5 is a deliberate discount to recoup costs on surplus copies of the first two books. Price and shipping are configurable (BO-31, BO-33). Still needed: copies on hand per book, to set starting stock (BO-34) |
| **Q4** | **Does Laurie want to write regular emails herself?** Is there an existing mailing list or service? | Laurie | Use a low-cost service; start with a few automations | |
| **Q5** | How much follow-up feels right? Are abandoned-checkout emails acceptable? May past buyers get one invitation to join? | Laurie | One reminder only; one invitation only | |
| **Q6** | Amazon: Is the Good Girl, Karma listing live? Should the signed copy be positioned as "the better option"? Affiliate program? | Laurie | Link all; no affiliate tag at launch | |
| **Q7** | Who packs and ships, and how? Is USPS Media Mail used? Where's the stock kept? Does anyone other than Laurie need access? | Laurie | Manual to start; labels later | |
| **Q8** | Are customer accounts wanted? | Owner | No; guest checkout and order links | |
| **Q9** | What ship-time promise can be made? Does it change during holidays or travel? Is a "vacation mode" needed? | Laurie | "Ships within 3–5 business days" **[Confirm]** | |
| **Q10** | **Is Laurie registered to collect sales tax? Is she operating as a business entity?** | Laurie / accountant | Accountant review before launch | |
| **Q11** | Ship outside the U.S.? | Laurie | U.S. only; Canada later if requested | |
| **Q12** | How long should dedications be retained? | Owner | 24 months | |
| **Q13** | **What's known about Book 3?** Title, audience, format, publication date, and may it be publicized now? | Laurie | Coming-soon page once a title can be shared | |
| Q14 | Exact Morris Animal Foundation arrangement: What share of proceeds, which books, and which sales channels? Is the logo approved? | Laurie | Don't publish until confirmed | |
| Q15 | Is the audience for school visits or speaking worth a dedicated offer? | Laurie | Inquiry form only | |
| Q16 | Other awards, press or reviews? (e.g., contest entries) Which testimonials apply to which book? | Laurie | Use only confirmed items | |
| Q17 | Who owns the domain, DNS, PayPal, Firebase, Netlify, Azure and GitHub accounts? Can Laurie get access to all of them? | Owner | Document all; shared password manager | |
| Q18 | Is Azure still used? | Owner | Retire it if not | |
| Q19 | Is there an existing brand or logo that must be kept? | Laurie | Create a simple wordmark | |
| **Q20** | **How much of each book should visitors be able to page through?** The whole book, or a sample? The current site shows 4 of *Good Girl, Karma*'s 15 pages. Can *Treasure's Gift* interior pages be supplied as images? | Laurie | A sample of about a third, ending at a "get the signed copy" prompt; set per book | |

---

## 17. Content and Assets Needed

- [ ] Final front cover files for every book (and back covers if available)
- [ ] Interior page images for the page-turning viewer, in page order, for every book (Q20)
- [ ] Confirmed book metadata for both books: see Appendix A
- [ ] Amazon URL for Good Girl, Karma; library/school catalog URLs for both books
- [ ] Updated author biography and current photos (a professional portrait is worthwhile)
- [ ] Photos of the real Treasure and Karma; photos of signed title pages and dedication examples
- [ ] Approved Morris Animal Foundation wording and logo permission
- [ ] Purple Dragonfly Award: confirmation of award details and logo use
- [ ] Testimonials, confirmed for permission and matched to the book
- [ ] Shipping, returns and privacy policy text
- [ ] Business mailing address for marketing email; a public contact email at the domain
- [ ] Book 3 details and artwork, when they can be shared

---

## Appendix A: Book Facts on File

Confirm each with Laurie before publication.

| Field | *Treasure's Gift* | *Good Girl, Karma* |
|---|---|---|
| Format | Hardcover *(site copy)* | Softcover *(site copy)*; paperback *(retailer listing)* |
| Length | 36 pages, 7 chapters *(site copy)* | 15 illustrated pages *(site copy)* |
| Reader | First or second grade; younger with an adult *(site copy)* | Pre-readers and young readers *(site copy)* |
| ISBN | 1592986234 *(from the Amazon URL in the code)* | 9798985474619 *(retailer listing)* |
| Illustrator | **Unknown** | Jessica Anlauf *(retailer listing)* |
| Publisher | **Unknown** | **To confirm**; a web search suggested "Write Place" |
| Publication date | **Unknown** | 2022 copyright *(retailer listing)* |
| Current price | $5.00, "normally" $16.95 *(code)* | $5.00, "normally" $13.95 *(code)* |
| Award | 2017 Purple Dragonfly Award, Best Children's Book, Animal/Pet category *(site copy)* | None on file |
| Amazon | [Listing](https://www.amazon.com/Treasures-Gift-Laurie-Hanson/dp/1592986234) *(URL in code; not verified, the page refused automated access)* | **Needed** |
| Library | Held in Minnesota's [MNLink catalog](https://search.mnlink.org/Record/1dab1fde-75c4-4876-98c1-ce4f65557da6), which shows holdings rather than a place to buy. **Purchase catalog needed** | **Needed** |
| Cause | None on file | Proceeds shared with Morris Animal Foundation; real Karma took part in its Golden Retriever Lifetime Study *([retailer listing](https://pastforward.org/products/good-girl-karma-9798985474619))* |

---

## Change Log

| Version | Date | Notes |
|---|---|---|
| 0.1 | 2026-11-05 | First draft, from a review of the code and live site |
| 0.2 | 2026-11-06 | Owner notes: no traffic, so no launch freeze (LCH-01, LCH-04, LCH-06, Phase 0, risks, §12); analytics in the back office (RPT-04, RPT-08, RPT-09, BO-04); page-turning viewer (BK-07 to BK-10, Q20); discount pricing is deliberate and configurable (BO-31, CMP-04, CHK-16, Q3); configurable shipping (BO-33, BO-36) |
