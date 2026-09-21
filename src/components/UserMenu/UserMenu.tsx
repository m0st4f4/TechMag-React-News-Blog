import { type ReactNode, useState } from "react";

import { useTranslation } from "react-i18next";

import { LoginDialog } from "@/components/UserMenu/components/LoginDialog/LoginDialog.tsx";
import { RegisterDialog } from "@/components/UserMenu/components/RegisterDialog/RegisterDialog.tsx";
import { UserDropdownMenu } from "@/components/UserMenu/components/UserDropdownMenu/UserDropdownMenu.tsx";
import { ResetPassword } from "@/components/UserMenu/components/resetPassword/ResetPassword.tsx";
import { Button } from "@/components/ui/button.tsx";

import { useAuth } from "@/hooks/useAuth.ts";

import MingcuteUser1Line from "@/icons/MingcuteUser1Line.tsx";

export const UserMenu = (): ReactNode => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handeLoginButtonClick = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    setIsResetPassOpen(false);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const handeRegisterButtonClick = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
    setIsResetPassOpen(false);
  };

  const [isResetPassOpen, setIsResetPassOpen] = useState(false);
  const handelResetPassButtonClick = () => {
    setIsResetPassOpen(true);
    setIsRegisterOpen(false);
    setIsLoginOpen(false);
  };

  const LoginButton = (
    <Button
      variant="link"
      className="justify-start"
      onClick={handeLoginButtonClick}
    >
      {t("auth.actions.loginButton")}
    </Button>
  );
  const RegisterButton = (
    <Button
      variant="link"
      className="justify-start"
      onClick={handeRegisterButtonClick}
    >
      {t("auth.actions.registerButton")}
    </Button>
  );

  const ResetButton = (
    <Button
      variant="link"
      className="justify-start"
      onClick={handelResetPassButtonClick}
    >
      {t("auth.actions.resetPassButton")}
    </Button>
  );
  return (
    <>
      {user ? (
        <UserDropdownMenu user={user} onLogout={logout} />
      ) : (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={handeLoginButtonClick}
            aria-label="Login"
            className="rounded-full"
          >
            <MingcuteUser1Line />
          </Button>
          <LoginDialog
            isOpen={isLoginOpen}
            onOpenChange={setIsLoginOpen}
            extraButtons={[RegisterButton]}
          />
          <RegisterDialog
            isOpen={isRegisterOpen}
            onOpenChange={setIsRegisterOpen}
            extraButtons={[LoginButton]}
          />
          <ResetPassword
            isOpen={isResetPassOpen}
            onOpenChange={setIsResetPassOpen}
            extraButtons={[LoginButton, RegisterButton]}
          />
        </>
      )}
    </>
  );
};
