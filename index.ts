import { PseudoRoku } from 'pseudoroku';

function genDate(date: string) {
	new PseudoRoku({
		input: `./${date}.txt`,
		output: `docs/${date}.html`,
		template: `./${date}-template.html`,
		profile_lookup: './profile_lookup.tsv',
		getIconPathFromCensoredName: name => `icons/${name}.webp`,
		getMediaPath: media => `media/${media}`,
	}).doEverything();
}

genDate("2022-09-16");