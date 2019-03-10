# Notetonic Eater

## For development
`parcel serve index.html`

## TODO
Optimisations:
- lazy loading, of images, render placeholders 
- web workers
- incrementally compute on deltas only? Problem is that it creates a lot of needless complexity and causes data invalidation issues
i.e. if we compute only on deltas, we will have to count the number of word occurences after each cycle so as to remove 
those that hit 0. Requires benchmarking, not worth the effort to deal with right now.
Download and vendor all external dependencies
- quilljs
- bulma
- fontawesome

## Business Model
- See benchling?
