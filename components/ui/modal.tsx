"use client";

import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";
import IconButton from "./icon-button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition appear as={Fragment} show={open}>
      <Dialog as="div" className={"relative z-10"} onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                as="div"
                className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle"
              >
                <div className="relative flex w-full items-center overflow-hidden bg-white dark:bg-slate-800 dark:text-white px-4 pb-8 pt-14 shadow-2xl sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute top-4 right-4">
                    <IconButton
                      className="dark:bg-slate-500 dark:text-white"
                      onClick={onClose}
                      icon={<X className="!dark:text-white" size={15} />}
                    />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
