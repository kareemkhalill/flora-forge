# Image audit — Flora & Forge

The stock photos in `/public/images` were named after menu items and sections they
do not actually depict. Every reference now goes through `src/data/images.ts`, so
swapping in real photography is a one-file change.

## Files in use

| File | What it actually shows | Used as |
| --- | --- | --- |
| `truffle-mushroom.jpg` | Neapolitan margherita, leopard-spotted crust, marble | Hero, menu highlight |
| `dough.jpg` | Two baked margheritas, moody light | Craft story, menu highlight |
| `san-marzano.jpg` | Tomatoes on the vine | Ingredient |
| `basil-oil.jpg` | Olive oil cruet with olives | Ingredient |
| `prosciutto-stracciatella.jpg` | Pizza with stracciatella and arugula | Signature pie, ingredient |
| `pizzaiolo.jpg` | Four-cheese pizza on a board | The dough, menu highlight |
| `hero-pizza.jpg` | Pulled-chicken pizza with red onion | Menu highlight |
| `mortadella-pistachio.jpg` | Four-cheese pizza, closer crop | Ingredient (fior di latte) |
| `calabrian-chili.jpg` | Pulled-chicken pizza, red sauce and onion | Ingredient (chili) |
| `spicy-honey.jpg` | Pulled-chicken pizza on a dark board | The oven |
| `room1.jpg` | Restaurant interior, timber and banquettes | The room |
| `room3.jpg` | Plated course and wine, candlelit | The room |

## Retired — do not reference

| File | Why |
| --- | --- |
| `oven.jpg` | Bowl of shrimp gumbo. Wrong cuisine entirely; was captioned "wood-fired oven". |
| `room2.jpg` | Lakeside terrace with blue plastic chairs. Reads as a resort, not a Chelsea warehouse. |
| `fior-di-latte.jpg` | Sausage-and-pepper pizza on a saturated orange background. Clashes with the palette. |
| `burrata-piccante.jpg` | Duplicate of the orange-background shot above. |

Note: `calabrian-chili.jpg` / `spicy-honey.jpg` are crops from the same shoot as
`hero-pizza.jpg`, and `mortadella-pistachio.jpg` is a crop of the same pie as
`pizzaiolo.jpg`. They are used in separate sections so the repetition is not
visible in a single viewport, but real per-subject photography would remove it.

## Slots that need a real shoot

1. **The oven.** No oven photograph exists in the library; that section
   currently carries a pie shot on a dark board. A real hearth photo is the
   single highest-value addition.
2. **A pizzaiolo at work.** Hands stretching dough — referenced throughout the
   copy, never actually pictured.
3. **Raw 48-hour dough.** The fermentation story is the brand's core claim and
   has no supporting image.
4. **The Chelsea room.** `room1.jpg` is a generic interior; a real photo of the
   brick-and-timber space would carry the "one oven, one neighborhood" section.
5. **Per-pie photography.** Menu items are matched to the closest visual
   approximation. Real shots of each signature pie would remove the mismatch
   between topping lists and imagery.
