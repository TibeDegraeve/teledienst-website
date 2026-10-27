import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
    name: 'default',
    title: 'VZW Teledienst Beheer',
    projectId: 'luyymhkn',
    dataset: 'production',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: {
        types: [
            // Module 1: Nieuwsberichten
            {
                name: 'nieuws',
                title: 'Nieuwsberichten',
                type: 'document',
                fields: [
                    { name: 'titel', title: 'Titel van het bericht', type: 'string' },
                    { name: 'datum', title: 'Publicatiedatum', type: 'date' },
                    { name: 'inhoud', title: 'Inhoud', type: 'text' },
                    { name: 'afbeelding', title: 'Afbeelding', type: 'image' },
                ],
            },
            // Module 2: Pagina's
            {
                name: 'pagina',
                title: 'Pagina\'s',
                type: 'document',
                fields: [
                    { name: 'titel', title: 'Paginatitel', type: 'string' },
                    { name: 'slug', title: 'URL-pad (bijv. /contact)', type: 'slug' },
                    { name: 'tekst', title: 'Tekstblok', type: 'text' },
                ],
            },
        ],
    },
});