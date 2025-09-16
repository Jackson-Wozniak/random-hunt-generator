import type { Rules } from "../../types/HuntTypes";

export const HuntingRules: Rules[] = [
  { restriction: "Local regulations prohibit the use of motorized vehicles within the reserve.", timeOfDay: "No Restrictions" },
  { restriction: "Night hunting is forbidden; all hunts must be conducted between sunrise and sunset.", timeOfDay: "06:00 - 18:00" },
  { restriction: "Hunters must remain on designated paths to minimize environmental impact.", timeOfDay: "No Restrictions" },
  { restriction: "Using spotting scopes from vehicles is not allowed in this region.", timeOfDay: "No Restrictions" },
  { restriction: "Call or lure devices may only be used for small game, at hunting tier 2 or lower.", timeOfDay: "No Restrictions" },
  { restriction: "Shooting across water bodies is prohibited to prevent accidents.", timeOfDay: "No Restrictions" },
  { restriction: "Local regulations have prohibited the use of firearms, only bows and crossbows may be used.", timeOfDay: "No Restrictions" },
  { restriction: "Hunting near civilian settlements is strictly forbidden. All hunters must remain 500ft away from cabins or campsites", timeOfDay: "No Restrictions" },
  { restriction: "All game must be hunted ethically; tracking wounded animals beyond safe range is prohibited.", timeOfDay: "No Restrictions" },
  { restriction: "Only hunt at night in designated nocturnal zones.", timeOfDay: "16:00 - 06:00" },
  { restriction: "Hunting is only allowed during early morning hours in this area.", timeOfDay: "05:00 - 09:00" },
  { restriction: "Afternoon hunts are recommended due to animal activity patterns.", timeOfDay: "12:00 - 18:00" },
  { restriction: "Motorized vehicles have been prohibited by local officials.", timeOfDay: "No Restrictions"},
  { restriction: "All campsites in the area have been booked. Sleep at campsites is prohibited", timeOfDay: "06:00 - 18:00"}
];