import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames('flex items-center p-5 border-b h-[var(--header-height)]', {
        'border-transparent': !chat.started,
        'border-bolt-elements-borderColor': chat.started,
      })}
    >
      <div className="flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl" />
        <a href="/" className="text-2xl font-semibold text-accent flex items-center">
          {/* <span className="i-bolt:logo-text?mask w-[46px] inline-block" /> */}
          <img src="/Ocyx-Logo-01.png" alt="logo" className="w-[90px] inline-block dark:hidden" />
          <img src="/Ocyx-Logo-01.png" alt="logo" className="w-[90px] inline-block hidden dark:block" />
        </a>
      </div>
      {chat.started && ( // Display ChatDescription and HeaderActionButtons only when the chat has started.
        <>
          <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
            <ClientOnly>{() => <ChatDescription />}</ClientOnly>
          </span>
          <ClientOnly>
            {() => (
              <div className="mr-1">
                <HeaderActionButtons />
              </div>
            )}
          </ClientOnly>
        </>
      )}
      {/* Social Links */}
      <div className="flex items-center gap-4 ml-auto">
        <a
          href="https://x.com/OcyxCODING"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bolt-elements-textPrimary hover:text-accent transition-colors"
        >
          <div className="i-ph:twitter-logo text-xl" />
        </a>
        <a
          href="https://ocyx-intelligent-project-creator.gitbook.io/ocyx-intelligent-project-creator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bolt-elements-textPrimary hover:text-accent transition-colors"
        >
          <div className="i-ph:book-open text-xl" />
        </a>
      </div>
    </header>
  );
}
