{{ Form::open(['route' => 'auth.doResetPassword']) }}
    <input type="hidden" name="token" value="{{{ $token }}}">

    <div class="form-group">
        <label for="password">{{{ Lang::get('confide::confide.password') }}}</label>
        <input class="form-control" placeholder="{{{ Lang::get('confide::confide.password') }}}" type="password" name="password" id="password">
    </div>
    <div class="form-group">
        <label for="password_confirmation">{{{ Lang::get('confide::confide.password_confirmation') }}}</label>
        <input class="form-control" placeholder="{{{ Lang::get('confide::confide.password_confirmation') }}}" type="password" name="password_confirmation" id="password_confirmation">
    </div>

    @if (Session::get('error'))
        <div class="alert alert-error alert-danger">{{{ Session::get('error') }}}</div>
    @endif

    @if (Session::get('notice'))
        <div class="alert">{{{ Session::get('notice') }}}</div>
    @endif

    <div class="form-actions form-group">
        <button type="submit" class="btn btn-primary">{{{ Lang::get('confide::confide.forgot.submit') }}}</button>
    </div>
{{ Form::close() }}
