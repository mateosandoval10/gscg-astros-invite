# Group Invitation: Daikin Park (concept prototype)

A one-page, personalized invitation that replaces cold calls and generic emails for Houston Astros group sales outreach to schools, faith communities, nonprofits, unions, neighborhood groups and anyone else.

Built by the Gonzaga Sport Consulting Group (GSCG) as a **concept prototype** for the Houston Astros. Not an official Astros page.

**Live:** https://mateosandoval10.github.io/gscg-astros-invite/
**Link builder:** https://mateosandoval10.github.io/gscg-astros-invite/build/

## How the automation works
One template, personalized by the link:

| Parameter | Example | Effect |
|---|---|---|
| `org` | `Lincoln%20Elementary` | Puts the group's name in the headline and the outing sketch |
| `type` | `school`, `faith`, `nonprofit`, `union`, `community`, `other` | Opens the matching ideas tab and wording |
| `lang` | `es` | Opens in Spanish |
| `from` | `Maria%20from%20the%20Astros` | Shows "Invited by …" |

The `/build` page generates single links or a CSV of links from a pasted list, ready for any email or text tool.

## Editing
All copy and facts are in `lib/content.ts` (English + Spanish). Facts marked `VERIFY` come from public Astros pages and must be confirmed with the Astros before launch.

## Deploy
`npm run build` → static site in `out/`, published to the `gh-pages` branch.
