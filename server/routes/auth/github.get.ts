export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: { githubId: user.id, email: user.email },
    })
    return sendRedirect(event, '/')
  },
})
