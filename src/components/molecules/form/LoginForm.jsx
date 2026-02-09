import TextInputAtom from "../../atoms/form/Input";
import { CreateButton } from "../../atoms/Button";
import { Box, Container, Paper, Stack, Typography, Avatar, CircularProgress } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const LoginForm = ({formData, handleChange, handleSubmit, loading = false})=>{
    return(
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            backgroundImage: (theme) => `linear-gradient(135deg, ${theme.palette.primary.light}22 0%, ${theme.palette.secondary.light}22 100%)`,
            p: 2,
          }}
        >
          <Container maxWidth="xs">
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: 3,
                backdropFilter: 'blur(4px)',
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Stack spacing={0.5} alignItems="center" sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700}>Bienvenido</Typography>
                  <Typography variant="body2" color="text.secondary">Inicia sesión para continuar</Typography>
                </Stack>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
                  <Stack spacing={2}>
                    <TextInputAtom
                      name="user"
                      label="Usuario"
                      type="text"
                      value={formData.user}
                      onChange={(e) => { handleChange('user', e.target.value) }}
                    />

                    <TextInputAtom
                      name="password"
                      label="Contraseña"
                      type="password"
                      value={formData.password}
                      onChange={(e) => { handleChange('password', e.target.value) }}
                    />

                    <CreateButton
                      text={loading ? "Ingresando..." : "Iniciar sesión"}
                      type="submit"
                      size="large"
                      sx={{ mt: 1, py: 1.2, borderRadius: 2 }}
                      disabled={loading}
                      endIcon={loading ? <CircularProgress color="inherit" size={20} /> : undefined}
                      fullWidth
                    />
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Container>
        </Box>
    )
}

export default LoginForm