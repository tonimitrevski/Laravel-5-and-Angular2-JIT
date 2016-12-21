<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
    <app style="display: none">
        <a href="javascript:;" (click)="example()">This is example Text With Global Variable</a>
    </app>
    </body>
    @if (App::environment('production'))
        <script src="{{ elixir('polyfill.bundle.js') }}"></script>
        <script src="{{ elixir('home.bundle.js') }}"></script>
    @else
        <script src="{{ asset('polyfill.bundle.js') }}"></script>
        <script src="{{ asset('home.bundle.js') }}"></script>
    @endif
</html>
