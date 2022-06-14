import type { NextApiRequest, NextApiResponse } from "next";
import { News, SingleNews } from "../../../utils/types/news";

export const news = [
  {
    id: 1,
    title:
      "Emma Raducanu’s Wimbledon plans in jeopardy after Nottingham retirement",
    author: "Emma Raducanu",
    text: "Emma Raducanu’s preparations for Wimbledon were thrown into chaos here on Tuesday as she was forced to retire injured only 35 minutes into her first-round match against Viktorija Golubic in the Rothesay Open. The British No 1 lost her opening service game to 30 but immediately broke back and then comfortably held serve for a 2-1 lead. Raducanu then took a three-minute timeout at the change of ends which initially appeared to have resolved a problem with her left side, as she immediately broke the Golubic serve for a second time, mixing power and guile to set up thumping winners on both forehand and backhand.",
    img: "https://i.guim.co.uk/img/media/a1384ebca5a83e736479c17c76c8d02499919e63/0_0_4237_2543/master/4237.jpg?width=620&quality=85&auto=format&fit=max&s=64b5b137e13e137c059df40395f23c8e",
  },
  {
    id: 2,
    title: "Nigel Slater’s recipe for potato and tomato stew with harissa",
    author: "Nigel Slater",
    text: "This is a light and warmly spiced vegan, vegetable stew for a summer day. Wash 500g of small potatoes, shake them dry, then slice them as thickly as a £1 coin. In a wide, shallow pan warm 6 tbsp of olive oil over a moderate heat, then add the potatoes and cook for about 10 minutes, occasionally turning them over and moving them around the pan, until they are pale gold. Peel 4 cloves of garlic and slice them thinly. While the potatoes cook, halve 1 red pepper and remove its seeds, then cut each half into 8 slices and add them to the pan with the potatoes, together with the sliced garlic. Halve 500g of mixed tomatoes and add them to the pan, then strip 4 bushy thyme sprigs of their leaves and stir in with salt and a little ground black pepper. Pour in 300ml of vegetable stock and stir in 2 tsp of harissa paste. Let everything come to the boil, then lower the heat to a simmer and partially cover with a lid. Leave to simmer for 20 minutes. Chop a handful of basil or coriander leaves, as you wish, and stir in, then bring to the table. Serves 2, generously The amount of harissa is up to you. The amount involved here gives a warm level of chilli heat, aromatic rather than hot. Adjust it to your own taste. Use other chilli pastes, depending on what you have in your fridge. You can make this recipe more substantial by serving it with steamed rice, but couscous is a good idea, too. I like to fork chopped coriander or mint through the grain.",
    img: "https://i.guim.co.uk/img/media/c15c02013255c3ad06c59a5d156c2244d2e303dc/0_256_8256_4954/master/8256.jpg?width=1020&quality=85&auto=format&fit=max&s=973c4eada82d6ef613c8545a53782343",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News | SingleNews | { message: string }>
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      if (id != null) {
        const foundNew = news.find((item) => item.id === +id);
        if (foundNew) {
          return res.status(200).json(foundNew);
        } else {
          return res.status(404).json({ message: "Not Found" });
        }
      }
      res.status(200).json(news);
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
