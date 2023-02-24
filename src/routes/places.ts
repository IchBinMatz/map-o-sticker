import lde from "$lib/assets/fotos/layl.jpg";
import bhotel from "$lib/assets/fotos/portugal.jpg";
import tj from "$lib/assets/fotos/t.jpg";
import bruder from "$lib/assets/fotos/bruder.jpg";

type Place = {
  name: string;
  loc: [number, number];
  img?: string;
};
export let places: Place[] = [
  {
    name: "tj",
    loc: [54.78065463305339, 8.82010421472079],
    img: tj,
  },
  {
    name: "bhotel",
    loc: [37.15667659707556, -7.567374318490646],
    img: bhotel,
  },
  {
    name: "wg",
    loc: [48.1319107636191, 11.597328269263155],
  },
  {
    name: "party",
    loc: [48.13122540161655, 11.595708636957829],
  },
  {
    name: "eltern",
    loc: [54.86601997512145, 8.664989118933663],
  },
  {
    name: "bruder",
    loc: [53.5839063248693, 10.030755051845581],
    img: bruder,
  },
  {
    name: "alte Wohnung",
    loc: [53.528094164617904, 8.105920701789987],
  },
  {
    name: "ex",
    loc: [52.256295421053245, 8.1017744410037],
  },
  {
    name: "ng",
    loc: [54.778399572631464, 8.827109637840012],
  },
  {
    name: "gh",
    loc: [53.526107661188796, 8.128171334775397],
  },
  {
    name: "lay",
    loc: [54.86966009631935, 8.895859553098285],
    img: lde,
  },
  {
    name: "mind",
    loc: [52.02722078477807, 8.535908692324725],
  },
  {
    name: "autobahn",
    loc: [53.300584250313534, 9.534203569285786],
  },
];
