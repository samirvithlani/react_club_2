<div>
<button className="btn btn-primary" onClick={fetchUserData1}>FETCH DATA</button>
<button className="btn btn-primary" onClick={addUser}>adD DATA</button>

<ToastContainer />
<Route path="/" exact>
  {
    !isLoading && users != undefined && users.length > 0 && <UserList users={users} />
  }

  {
    isLoading && <p>Loading !!!</p>
  }
  {
    !isLoading && error && <p>{error}</p>
  }

</Route>
<Route path="/user/:id">
  <UserDetail />
</Route>
