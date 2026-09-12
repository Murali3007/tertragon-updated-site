---
title: Troubleshooting
sidebar_position: 7
description: Diagnose common Tetragon runtime and observability issues.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Use these guides to investigate BPF loading, logging, gRPC, and system diagnostics.

<DocCardGrid>
  <DocCard title="BPF Program Statistics" description="Inspect statistics and behavior for loaded BPF programs." to="/docs/docs/troubleshooting/bpf-progs-stats" />
  <DocCard title="gRPC TLS" description="Troubleshoot secure gRPC listener and client connections." to="/docs/docs/troubleshooting/grpc-tls" />
  <DocCard title="Log Level" description="Adjust and diagnose Tetragon logging behavior." to="/docs/docs/troubleshooting/loglevel" />
  <DocCard title="System Dump" description="Collect diagnostic information for a Tetragon installation." to="/docs/docs/troubleshooting/sysdump" />
</DocCardGrid>
