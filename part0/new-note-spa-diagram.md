```mermaid

sequenceDiagram

    participant browser
    participant server

    Note right of browser: The browser executes callback function that<br> re-renders the notes list with the new note appended
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: <br>
    deactivate server

```