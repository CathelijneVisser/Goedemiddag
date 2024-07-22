<template>
    <section class="flex bg-green justify-between p-10 text-base">
        <div class="flex flex-col">
            <p>Checklist</p>
            <ul >
                <listitems id="tickets" title="Alle tickets verwerkt / alle functies zitten er in."></listitems>
                <listitems id="errorpage" title="Error pagina bestaat"></listitems>
                <listitems id="icon and title" title="fav icon en titel"></listitems>
                <listitems id="presentatie" title="Eind product laten zien aan opdrachtgever."></listitems>
                <listitems id="code-DRY" title="Code is DRY"></listitems>
                <listitems id="code-conventions" title="Code met consistente code conventions"></listitems>
                <listitems id="alt-text" title="Alt tekst bij img."></listitems>
                <listitems id="Contrast" title="Kleuren contrast volgens WCAG-standaarden."></listitems>
                <listitems id="lighthouseissues" title="Alle issue die uit tests gekomen zijn, zijn verholpen."></listitems>
                <listitems id="usertest" title="User test"></listitems>
                <listitems id="lighthousetest" title="Lighthouse test"></listitems>
                <listitems id="screenreadertest" title="Screenreader test"></listitems>
                <listitems id="tabtest" title="Tab test"></listitems>
            </ul>
        </div>
        <svglogo></svglogo>
    </section>
</template>